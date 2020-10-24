using System;

namespace webAPI
{
    public class Apartment
    {
        public int ApartmentID { get; set; }
        public int MyPropertyOwner { get; set; }
        public string Street1 { get; set; }
        public string Street2 { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
        public Boolean Avaliable { get; set; }
        public DateTime YearBuilt { get; set; }
        public DateTime DateAvaliable { get; set; }
        public int MonthlyPrice { get; set; }
        public Boolean CentralAC { get; set; }
        public int NumberRooms { get; set; }
        public int NumberBath { get; set; }
        public Boolean Refurbished { get; set; }
        public Boolean PetsAllowed { get; set; }
    }
}