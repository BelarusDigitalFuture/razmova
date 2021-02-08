using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Razmova.Dto.Auth
{
    public class AddUserRolesRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public IList<string> Roles { get; set; }
    }
}
