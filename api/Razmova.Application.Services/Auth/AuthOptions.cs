namespace Razmova.Application.Services.Auth
{
    public class AuthOptions
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string Secret { get; set; }
        public long AllowedClockSkewSeconds { get; set; }
        public long TokenExpireMilliseconds { get; set; }
    }
}
