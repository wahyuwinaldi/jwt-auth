export class User {
    id?: number;
    username?: string;
    name?: string;
    email?: string;
    phone?: string;
    idOrganization?: number;
    isDeleted?: boolean;
    deletedBy?: string;
    deletedAt?: Date;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    forceChangePassword?: boolean;
}
