namespace Core.Entities;
 
/// <summary>
/// Represents a product entity in the e-commerce system.
/// </summary>
/// <remarks>   
/// This class contains all the core properties needed to define a product,
/// including pricing, inventory, and categorization information.
/// </remarks>
public class Product : BaseEntity
{   
    public required  string Name { get; set; }
    public required string Description { get; set; }
    public decimal Price { get; set; }
    public required string PictureUrl { get; set; }
    public required string Type { get; set; }
    public required string Brand { get; set; }
    public int QuantityInStock { get; set; }
}
 