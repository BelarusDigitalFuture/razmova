using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Razmova.Data.Migrations
{
    public partial class AddDraftLawTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AvatarLink",
                table: "UserProfiles",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DraftLawCategories",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DraftLawCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DraftLawDocuments",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FileId = table.Column<Guid>(nullable: true),
                    DirectLink = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DraftLawDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DraftLawDocuments_Files_FileId",
                        column: x => x.FileId,
                        principalTable: "Files",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DraftLaws",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    IsNew = table.Column<bool>(nullable: false),
                    ParentDraftLawId = table.Column<Guid>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    DocumentId = table.Column<Guid>(nullable: true),
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    CategoryId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DraftLaws", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DraftLaws_DraftLawCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "DraftLawCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DraftLaws_DraftLawDocuments_DocumentId",
                        column: x => x.DocumentId,
                        principalTable: "DraftLawDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DraftLaws_DraftLaws_ParentDraftLawId",
                        column: x => x.ParentDraftLawId,
                        principalTable: "DraftLaws",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProjectParticipants",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    NameOrEmail = table.Column<string>(nullable: true),
                    CurrentEmploymentId = table.Column<Guid>(nullable: true),
                    UserProfileId = table.Column<Guid>(nullable: true),
                    DraftLawId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectParticipants", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProjectParticipants_Employments_CurrentEmploymentId",
                        column: x => x.CurrentEmploymentId,
                        principalTable: "Employments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProjectParticipants_DraftLaws_DraftLawId",
                        column: x => x.DraftLawId,
                        principalTable: "DraftLaws",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProjectParticipants_UserProfiles_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "UserProfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tag",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    DraftLawId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tag", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tag_DraftLaws_DraftLawId",
                        column: x => x.DraftLawId,
                        principalTable: "DraftLaws",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DraftLawDocuments_FileId",
                table: "DraftLawDocuments",
                column: "FileId");

            migrationBuilder.CreateIndex(
                name: "IX_DraftLaws_CategoryId",
                table: "DraftLaws",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_DraftLaws_DocumentId",
                table: "DraftLaws",
                column: "DocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_DraftLaws_ParentDraftLawId",
                table: "DraftLaws",
                column: "ParentDraftLawId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectParticipants_CurrentEmploymentId",
                table: "ProjectParticipants",
                column: "CurrentEmploymentId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectParticipants_DraftLawId",
                table: "ProjectParticipants",
                column: "DraftLawId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectParticipants_UserProfileId",
                table: "ProjectParticipants",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Tag_DraftLawId",
                table: "Tag",
                column: "DraftLawId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProjectParticipants");

            migrationBuilder.DropTable(
                name: "Tag");

            migrationBuilder.DropTable(
                name: "DraftLaws");

            migrationBuilder.DropTable(
                name: "DraftLawCategories");

            migrationBuilder.DropTable(
                name: "DraftLawDocuments");

            migrationBuilder.DropColumn(
                name: "AvatarLink",
                table: "UserProfiles");
        }
    }
}
