using Razmova.Domain.Users;

namespace Razmova.Domain.LawProjects
{
    public class ProjectParticipant : DataModel
    {
        public string NameOrEmail { get; set; }

        public UserProfile UserProfile { get; set; }
    }
}
