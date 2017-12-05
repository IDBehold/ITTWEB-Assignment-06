using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ITTWEB_Assignment_06.Models;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using System.Collections;
using JWT;
using JWT.Serializers;
using JWT.Algorithms;
using Microsoft.Extensions.Options;
using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ITTWEB_Assignment_06.Controllers
{
  [Route("api/[controller]")]
  public class AccountController : Controller
  {
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;

    public AccountController(
      UserManager<IdentityUser> userManager,
      SignInManager<IdentityUser> signInManager)
    {
      _userManager = userManager;
      _signInManager = signInManager;
    }

    [HttpPost("Register")]
    public async Task<IActionResult> Register([FromBody] Credentials Credentials)
    {
      var user = new IdentityUser { UserName = Credentials.Email, Email = Credentials.Email };
      var result = await _userManager.CreateAsync(user, Credentials.Password);
      if (result.Succeeded)
      {
        return Ok(user);
      }
      foreach (var error in result.Errors)
        ModelState.AddModelError(string.Empty, error.Description);
      return BadRequest(ModelState);
    }

    [HttpPost("Login")]
    public async Task<IActionResult> Login([FromBody] Credentials credentials)
    {
      var result = await _signInManager.PasswordSignInAsync(credentials.Email, credentials.Password, isPersistent: false, lockoutOnFailure: false);
      if (result.Succeeded) return Ok();
      ModelState.AddModelError(string.Empty, "Invalid login");
      return BadRequest(ModelState);
    }

    [HttpPost("jwtLogin")]
    public async Task<IActionResult> JWTLogin([FromBody] Credentials credentials)
    {
      var user = await _userManager.FindByEmailAsync(credentials.Email);
      if (user == null)
      {
        ModelState.AddModelError(string.Empty, "Invalid login");
        return BadRequest(ModelState);
      }
      var result = await _signInManager.CheckPasswordSignInAsync(user, credentials.Password, false);
      if (result.Succeeded)
      {
        return new ObjectResult(GenerateToken(credentials.Email));
      }
      return BadRequest("Invalid Login");
    }

    [HttpPost("Logout")]
    public async Task<IActionResult> Logout()
    {
      await _signInManager.SignOutAsync();
      return Ok();
    }

    private string GenerateToken(string username)
    {
      var claims = new Claim[]
      {
        new Claim(ClaimTypes.Name, username),
        new Claim(JwtRegisteredClaimNames.Nbf,
        new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
        new Claim(JwtRegisteredClaimNames.Exp,
        new DateTimeOffset(DateTime.Now.AddDays(1)).ToUnixTimeSeconds().ToString()),
      };
      var token = new JwtSecurityToken(new JwtHeader(new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("thisIsSecretMoreThanTheSlides")),
        SecurityAlgorithms.HmacSha256)),
        new JwtPayload(claims));
      return new JwtSecurityTokenHandler().WriteToken(token);
    }




  }
}
