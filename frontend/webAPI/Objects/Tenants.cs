using System;

namespace webAPI{
    public class Tenant{
        public int TenantID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int PhoneNumber { get; set; }
        public int CreditScore { get; set; }
    }
}