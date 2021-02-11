using Microsoft.EntityFrameworkCore.Migrations;

namespace Razmova.Data.Migrations
{
    public partial class FixTypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DonwloadLink",
                table: "Files");

            migrationBuilder.AddColumn<string>(
                name: "DownloadLink",
                table: "Files",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DownloadLink",
                table: "Files");

            migrationBuilder.AddColumn<string>(
                name: "DonwloadLink",
                table: "Files",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
