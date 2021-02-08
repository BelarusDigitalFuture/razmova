namespace Razmova.Domain.Locations
{
    public class City : DataModel
    {
        public string Name { get; set; }

        public Country Country { get; set; }
    }
}
