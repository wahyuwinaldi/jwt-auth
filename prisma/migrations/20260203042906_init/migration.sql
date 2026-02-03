-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50),
    "name" VARCHAR(100),
    "email" VARCHAR(100),
    "password" VARCHAR(255),
    "phone" VARCHAR(50),
    "id_organization" INTEGER,
    "role_code" VARCHAR(10),
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_by" VARCHAR(50),
    "deleted_at" TIMESTAMP(3),
    "created_by" VARCHAR(50),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" VARCHAR(50),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "force_change_password" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
