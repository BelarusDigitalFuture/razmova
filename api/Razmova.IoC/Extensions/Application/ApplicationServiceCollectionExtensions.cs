﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Razmova.Application.Services.Auth;
using Razmova.Application.Services.DraftLaws;
using Razmova.Application.Services.Files;
using Razmova.Application.Services.Notifications;
using Razmova.Application.Services.Users;
using Razmova.Services.Interfaces;

namespace Razmova.IoC.Extensions.Application
{
    public static class ApplicationServiceCollectionExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IAuthService, AuthService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ISystemNotificationService, SystemNotificationService>();
            services.AddTransient<IFilesService, FileService>();
            services.AddTransient<IFtpFileService, FtpFileService>();
            services.AddTransient<IDraftLawService, DraftLawService>();
            services.AddTransient<IDraftLawCategoryService, DraftLawCategoryService>();

            return services;
        }
    }
}