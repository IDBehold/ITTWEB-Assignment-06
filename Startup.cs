using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ITTWEB_Assignment_06.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ITTWEB_Assignment_06
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {

      var connection = @"Server=(localdb)\MSSQLLocalDB;Initial Catalog=EmbeddedStock;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
      services.AddDbContext<FitnessDbContext>(options => options.UseSqlServer(connection));
      services.AddDbContext<UserDbContext>(options => options.UseSqlServer(connection));
      services.AddIdentity<IdentityUser, IdentityRole>().AddEntityFrameworkStores<UserDbContext>().AddDefaultTokenProviders();
      services.Configure<IdentityOptions>(options =>
      {
        options.Password.RequireDigit = false;
        options.Password.RequiredLength = 4;
        options.Password.RequireLowercase = false;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = false;
      });
      services.AddCors();
      services.AddMvc();
      services.AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = "Jwt";
        options.DefaultChallengeScheme = "Jwt";
      }).AddJwtBearer("Jwt", options =>
      {
        options.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateAudience = false,
          ValidateIssuer = false,
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("thisIsSecretMoreThanTheSlides")),
          ValidateLifetime = true,
          ClockSkew = TimeSpan.FromMinutes(5)
        };
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      app.UseCors(builder => builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader().AllowCredentials());
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseAuthentication();
      app.UseMvc();
    }
  }
}
