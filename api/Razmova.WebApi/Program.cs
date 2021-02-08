using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using Microsoft.Extensions.DependencyInjection;
using Razmova.Data;
using Razmova.Data.Configuration;
using NLog;
using NLog.Web;

namespace Razmova.WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var nlogFileName = GetNLogConfigurationFileName();

            var logger = NLogBuilder.ConfigureNLog(nlogFileName).GetCurrentClassLogger();

            try
            {
                logger.Debug("Initializing server");

                var host = CreateHostBuilder(args).Build();

                logger.Debug("Seeding default data");

                Seed(host);

                logger.Debug("Starting server");

                host.Run();
            }
            catch (Exception exception)
            {
                logger.Error(exception, "Stopped server due to exception");
            }
            finally
            {
                LogManager.Shutdown();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                    webBuilder
                        .UseContentRoot(Directory.GetCurrentDirectory())
                        .UseIISIntegration()
                        .UseStartup<Startup>()
                )
                .ConfigureLogging(logging => logging.ClearProviders())
                .UseNLog();

        private static string GetNLogConfigurationFileName()
        {
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            return string.IsNullOrWhiteSpace(environment)
                ? "nlog.config"
                : $"nlog.{environment}.config";
        }

        private static void Seed(IHost host)
        {
            using (var scope = host.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetService<RazmovaDbContext>();
                SeedData.SeedAsync(context).GetAwaiter().GetResult();
            }
        }
    }
}
