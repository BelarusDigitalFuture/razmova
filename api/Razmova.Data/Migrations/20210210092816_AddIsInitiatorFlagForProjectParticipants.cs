using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Razmova.Data.Migrations
{
    public partial class AddIsInitiatorFlagForProjectParticipants : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectParticipants_Employments_CurrentEmploymentId",
                table: "ProjectParticipants");

            migrationBuilder.DropIndex(
                name: "IX_ProjectParticipants_CurrentEmploymentId",
                table: "ProjectParticipants");

            migrationBuilder.DropColumn(
                name: "CurrentEmploymentId",
                table: "ProjectParticipants");

            migrationBuilder.AddColumn<bool>(
                name: "IsInitiator",
                table: "ProjectParticipants",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsInitiator",
                table: "ProjectParticipants");

            migrationBuilder.AddColumn<Guid>(
                name: "CurrentEmploymentId",
                table: "ProjectParticipants",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectParticipants_CurrentEmploymentId",
                table: "ProjectParticipants",
                column: "CurrentEmploymentId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectParticipants_Employments_CurrentEmploymentId",
                table: "ProjectParticipants",
                column: "CurrentEmploymentId",
                principalTable: "Employments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
