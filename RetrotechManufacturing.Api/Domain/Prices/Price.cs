using RetrotechManufacturing.Api.Domain.Base;
using RetrotechManufacturing.Api.Domain.Products;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetrotechManufacturing.Api.Domain.Prices;
[Table("Prices")]
public class Price : Entity
{
    /// <summary>
    /// This is the dollar amount per base unit in the lowest denomination of the selected currency, eg cents
    /// </summary>
    public decimal UnitAmount { get; set; }
    public string Currency { get; set; } = "CAD";
    public Product Product { get; set; }
    /// <summary>
    /// A promo code corresponding to this price. Null corresponds to regular price
    /// </summary>
    public string? PromoCode { get; set; } = null;
    public bool IsPrimary { get; set; }
    public string? EditedBy { get; set; }
    public long ProductId { get; set; }
}
