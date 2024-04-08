export enum OrderStatus{
    /// <summary>
    /// order has just been placed by user
    /// </summary>
    Placed,
    /// <summary>
    /// packing algorithm has been run and shipping costs calculated
    /// </summary>
    Packed,
    /// <summary>
    /// order is just a quote
    /// </summary>
    Quote,
    Paid,
    PaymentFailed,
    /// <summary>
    /// queued in octoprint
    /// </summary>
    Queued,
    /// <summary>
    /// currently printing on the 3d printer
    /// </summary>
    Printing,
    /// <summary>
    /// abs smoothing using acetone fumes or filling/sanding
    /// </summary>
    PostProcessingPrint,
    PassedQA,
    Shipped,
    Cancelled,
    Refunded
}