using System;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Razmova.WebApi.Models;

namespace Razmova.WebApi.Middlewares
{
    public class ExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public ExceptionHandlerMiddleware(RequestDelegate next, ILogger<ExceptionHandlerMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, "An error occured while processing the request");

                if (context.Response.HasStarted)
                {
                    throw;
                }

                await WriteResponseAsync(context, exception);
            }
        }

        private async Task WriteResponseAsync(HttpContext context, Exception exception)
        {
            var content = CreateError(exception);
            var statusCode = GetStatusCode(exception);

            await WriteResponseAsync(context, content, statusCode);
        }

        private async Task WriteResponseAsync(HttpContext context, object content, HttpStatusCode statusCode)
        {
            context.Response.StatusCode = (int)statusCode;

            if (content == null)
            {
                return;
            }

            if (content is string stringContent)
            {
                await context.Response.WriteAsync(stringContent, Encoding.UTF8);

                return;
            }

            context.Response.ContentType = "application/json";

            await context.Response.WriteAsync(JsonConvert.SerializeObject(content), Encoding.UTF8);
        }

        private Error CreateError(Exception ex)
        {
            switch (ex)
            {
                case ArgumentException argumentException:
                    return new Error { Fields = argumentException.ParamName, Message = argumentException.Message };
                default:
                    return new Error { Message = ex.Message };
            }
        }

        private static HttpStatusCode GetStatusCode(Exception exception)
        {
            switch (exception)
            {
                case ValidationException _:
                    return HttpStatusCode.BadRequest;
                default:
                    return HttpStatusCode.InternalServerError;
            }
        }
    }
}
