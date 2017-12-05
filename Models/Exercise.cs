using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Exercise {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string id { get; set; }
    public string exercise { get; set; }
    public string description { get; set; }
    public int sets { get; set; }
    public int reps { get; set; }
}