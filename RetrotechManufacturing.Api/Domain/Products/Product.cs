using RetrotechManufacturing.Api.Domain.Base;
using RetrotechManufacturing.Api.Domain.Prices;
using RetrotechManufacturing.Api.Domain.ProductGroups;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetrotechManufacturing.Api.Domain.Products;
[Table("Products")]
public class Product : Entity
{
    public string? Color { get; set; }
    public string? Material { get; set; }
    /// <summary>
    /// What makes this product unique within the productGroup. eg) discount, finished, unfinished
    /// </summary>
    public string? Identifier { get; set; }
    public string Description { get; set; }
    public ProductGroup ProductGroup { get; set; }
    public IEnumerable<Picture> Pictures { get; set; }
    public virtual IEnumerable<Category> Categories { get; set; }
    public virtual IEnumerable<Price> Prices { get; set; }
    /// <summary>
    /// Instructions relevant to this part. For example, a youtube video
    /// </summary>
    public string? InstructionsLink { get; set; }
    /// <summary>
    /// downloadable scan file or stl file
    /// </summary>
    [Url]
    public string? FilePath { get; set; }
    /// <summary>
    /// If the item isn't physical, FilePath should have a value.
    /// </summary>
    public bool IsPhysical { get; set; } = true;
    public string DisplayName
    {
        get
        {
            if (string.IsNullOrWhiteSpace(Identifier))
            {
                return $"{ProductGroup?.Name}";
            }

            return $"{ProductGroup?.Name} ({Identifier})";
        }
    }
    public long ProductGroupId { get; set; }

    /// <summary>
    /// required for json serialization, not EF
    /// </summary>
    public long[] CategoryIds { get; set; }
}
