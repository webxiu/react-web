import {
  GetWaitAnalysisDocumentNumApi,
  GroupInfoListItemTypes,
  LoginApi$$Response,
  PeopleBasicInfoApi,
  PeopleBasicInfoApi$$Response,
  RoleInfoListItemTypes,
  TagInfoListItemTypes,
  TaskCountApi,
  TaskCountApi$$Response
} from '@/service';
import { action, observable, runInAction, toJS } from 'mobx';
import { getStorageUserInfo, setStorageUserInfo } from '@/utils/user';

import { UserInfoListItemTypes } from '@/pages/Home/Settings/user-service';

export type EditFormFieldsType = { [index: string]: string[] };

export default class {
  @observable public version: string;
  protected timer: NodeJS.Timeout;
  @observable public analysisPercent = -1;
  @observable public uploadFileNumber = -1;
  @observable public uploadFileprogress = -1;
  @observable public isShowUpload = false;
  @observable public userInfo: LoginApi$$Response;
  /** 超级管理员：待分发的数量+待审核的数量 | 普通管理员：待分发的数量+待审核的数量 | 普通用户：   待研判数量 */
  @observable public waitingNum: number;
  /** 大队列表(没有支队) */
  @observable public groupList: GroupInfoListItemTypes[] = [];
  /** 大队列表(所有大队) */
  @observable public groupAllList: GroupInfoListItemTypes[] = [];
  /** 用户列表 */
  @observable public peopleList: UserInfoListItemTypes[] = [];
  /** 标签列表 */
  @observable public markList: TagInfoListItemTypes[] = [];
  /** 角色列表 */
  @observable public roleList: RoleInfoListItemTypes[] = [];
  /** 任务管理人员详情信息 */
  @observable public taskPeopleInfo: PeopleBasicInfoApi$$Response;
  /** 任务管理人员编辑暂存 */
  @observable public editPeopleFields: EditFormFieldsType | undefined;
  public constructor() {
    this.version = process.versions.electron;
    if (getStorageUserInfo()) {
      this.userInfo = getStorageUserInfo();
    }
    this.waitingNum = 0;
  }

  // 文件上传进度
  @action
  public setFileUploadProgress(progress: number) {
    runInAction(() => {
      this.uploadFileprogress = progress || 0;
    });
  }

  /**
   * 文件算法分析进度
   */
  protected async getPercentNum() {
    try {
      const { data } = await GetWaitAnalysisDocumentNumApi({});
      const percent = Number((((this.uploadFileNumber - data.data.number) / this.uploadFileNumber) * 100).toFixed(2));
      runInAction(() => {
        this.analysisPercent = percent;
      });
    } catch (error) {
      console.log('error', error);
    }
    clearTimeout(this.timer);
    if (this.analysisPercent >= 0 && this.analysisPercent < 100) {
      this.timer = setTimeout(() => {
        this.getPercentNum();
      }, 2000);
    }
  }

  @action public SetPercent = async () => {
    this.getPercentNum();
  };
  @action public resetPercent = async (data: number) => {
    this.analysisPercent = data;
  };

  @action public SetuploadFileNumber = async (data: number) => {
    runInAction(() => {
      this.uploadFileNumber = data;
    });
  };
  /**取消上传 */
  @action public setShowUpload = async (data: boolean) => {
    runInAction(() => {
      clearTimeout(this.timer);
      this.isShowUpload = data;
    });
  };

  /** 登录后设置用户信息 */
  @action public setUserInfo = async (user: LoginApi$$Response) => {
    runInAction(() => {
      this.userInfo = user;
      setStorageUserInfo(user);
    });
  };

  /** 设置任务管理数量 */
  @action public updateWaitingNum = async () => {
    try {
      const { data } = await TaskCountApi({});
      runInAction(() => {
        const res: TaskCountApi$$Response = data.data;
        this.waitingNum = res.count;
      });
    } catch (error) {
      console.log('TaskCountApi_error:', error);
    }
  };

  /** 设置大队列表 */
  @action public setGroupList = async (groups: GroupInfoListItemTypes[]) => {
    runInAction(() => {
      this.groupList = groups;
    });
  };
  /** 设置大队列表 */
  @action public setGroupAllList = async (groups: GroupInfoListItemTypes[]) => {
    runInAction(() => {
      this.groupAllList = groups;
    });
  };

  /** 设置某大队下的人员列表 */
  @action public setPeopleList = async (people: UserInfoListItemTypes[]) => {
    runInAction(() => {
      this.peopleList = people;
    });
  };

  /** 设置标签列表 */
  @action public setMarkList = async (marks: TagInfoListItemTypes[]) => {
    runInAction(() => {
      this.markList = marks;
    });
  };

  /** 设置角色列表 */
  @action public setRoleList = async (roles: RoleInfoListItemTypes[]) => {
    runInAction(() => {
      this.roleList = roles;
    });
  };

  /** 设置任务管理人员详情信息 */
  @action public setTaskPeopleInfo = async (peopleInfo: PeopleBasicInfoApi$$Response) => {
    runInAction(() => {
      this.taskPeopleInfo = peopleInfo;
    });
  };

  /** 人员信息编辑表单暂存 */
  @action public setEditPeopleFields = async (editFields: EditFormFieldsType | undefined) => {
    runInAction(() => {
      this.editPeopleFields = editFields;
    });
  };
}
