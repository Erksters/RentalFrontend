using System;
namespace webAPI
{
    public class Contract
    {
        public int ContractID { get; set; }
        public int AppartmentID { get; set; }
        public int DepositAmount { get; set; }
        public DateTime DateSigned { get; set; }
        public DateTime DateInEffect { get; set; }
        public DateTime DateExpires { get; set; }
    }
}