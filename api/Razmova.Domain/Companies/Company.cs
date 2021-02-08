using System;

namespace Razmova.Domain.Companies
{
    public class Company : DataModel
    {
        public string Name { get; set; }

        public CompanyScope CompanyScope { get; set; }
    }
}
