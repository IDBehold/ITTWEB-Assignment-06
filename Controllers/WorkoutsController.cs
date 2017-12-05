using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ITTWEB_Assignment_06.Models;
using Microsoft.AspNetCore.Authorization;

namespace ITTWEB_Assignment_06.Controllers
{
  [Produces("application/json")]
  [Route("api/Workouts")]
  [Authorize]
  public class WorkoutsController : Controller
  {
    private readonly FitnessDbContext _context;

    public WorkoutsController(FitnessDbContext context)
    {
      _context = context;
    }

    // GET: api/Workouts
    [HttpGet]
    [AllowAnonymous]
    public IEnumerable<Workout> GetWorkouts()
    {
      return _context.Workouts;
    }

    // GET: api/Workouts/5
    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetWorkout([FromRoute] string id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var workout = await _context.Workouts.SingleOrDefaultAsync(m => m.id == id);

      if (workout == null)
      {
        return NotFound();
      }

      return Ok(workout);
    }

    // PUT: api/Workouts/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutWorkout([FromRoute] string id)
    {
      var workout = await _context.Workouts.SingleOrDefaultAsync(w => w.id == id);
      workout.count++;
      _context.Entry(workout).State = EntityState.Modified;
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!WorkoutExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Workouts
    [HttpPost]
    public async Task<IActionResult> PostWorkout([FromBody] Workout workout)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.Workouts.Add(workout);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetWorkout", new { id = workout.id }, workout);
    }

    // DELETE: api/Workouts/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWorkout([FromRoute] string id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var workout = await _context.Workouts.SingleOrDefaultAsync(m => m.id == id);
      if (workout == null)
      {
        return NotFound();
      }

      _context.Workouts.Remove(workout);
      await _context.SaveChangesAsync();

      return Ok(workout);
    }

    private bool WorkoutExists(string id)
    {
      return _context.Workouts.Any(e => e.id == id);
    }
  }
}
