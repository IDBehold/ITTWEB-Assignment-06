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
  [Route("api/Exercises")]
  [Authorize]
  public class ExercisesController : Controller
  {
    private readonly FitnessDbContext _context;

    public ExercisesController(FitnessDbContext context)
    {
      _context = context;
    }

    // GET: api/Exercises
    [HttpGet]
    public IEnumerable<Exercise> GetExercises()
    {
      return _context.Exercises;
    }

    // GET: api/Exercises/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetExercise([FromRoute] string id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var exercise = await _context.Exercises.SingleOrDefaultAsync(m => m.id == id);

      if (exercise == null)
      {
        return NotFound();
      }

      return Ok(exercise);
    }

    // PUT: api/Exercises/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutExercise([FromRoute] string id, [FromBody] Exercise exercise)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != exercise.id)
      {
        return BadRequest();
      }

      _context.Entry(exercise).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ExerciseExists(id))
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

    // POST: api/Exercises
    [HttpPost]
    public async Task<IActionResult> PostExercise([FromBody] Exercise exercise)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      var workout = await _context.Workouts
        .Include(e => e.exercises)
        .SingleOrDefaultAsync(w => w.id == exercise.id);
      var newExercise = new Exercise
      {
        description = exercise.description,
        exercise = exercise.exercise,
        reps = exercise.reps,
        sets = exercise.sets
      };
      if (workout.exercises == null)
      {
        workout.exercises = new List<Exercise>();
      }
      workout.exercises.Add(newExercise);
      _context.Entry(workout).State = EntityState.Modified;
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetExercise", new { id = newExercise.id }, newExercise);
    }

    // DELETE: api/Exercises/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteExercise([FromRoute] string id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var exercise = await _context.Exercises.SingleOrDefaultAsync(m => m.id == id);
      if (exercise == null)
      {
        return NotFound();
      }

      _context.Exercises.Remove(exercise);
      await _context.SaveChangesAsync();

      return Ok(exercise);
    }

    private bool ExerciseExists(string id)
    {
      return _context.Exercises.Any(e => e.id == id);
    }
  }
}
