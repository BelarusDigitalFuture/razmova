namespace Razmova.Domain.Locations
{
    public class Address : DataModel
    {
        public City City { get; set; }

        public string Street { get; set; }

        public string BuildingNumber { get; set; }

        public string ApartmentNumber { get; set; }

        public string Additional { get; set; }
    }
}
