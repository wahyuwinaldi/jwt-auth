export class User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  idOrganization?: number;
  roleCode?: string;
  isDeleted?: boolean;
  deletedBy?: string;
  deletedAt?: Date;
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
  forceChangePassword?: boolean;
}
