using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.SignalR
{
    public class SignalRHub : Hub
    {
        public string Username;
        public async Task connect(string username)
        {
            Username = username;
            await Clients.All.SendAsync("connected", username);
            
        
        }
        public async Task sendMessage(string message)
        {
            await Clients.All.SendAsync("RecieveMessage", message);
        }
    }
}
