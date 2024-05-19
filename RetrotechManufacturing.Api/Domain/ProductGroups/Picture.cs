using RetrotechManufacturing.Api.Domain.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetrotechManufacturing.Api.Domain.ProductGroups;
[Table("Pictures")]
public class Picture : Entity
{
    public string Url { get; set; }
    public string Alt { get; set; }
}
