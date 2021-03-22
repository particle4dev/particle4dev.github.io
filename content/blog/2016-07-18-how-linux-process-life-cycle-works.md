---
title: How Linux Process Life Cycle Works – Parent, Child, and Init Process 23
date: "2016-07-18T00:00:00.000Z"
description: The concept of a process is fundamental concept of a Linux system. Processes can spawn other processes, kill other processes, communicate with other processes and much more. In this tutorial, we will discuss life cycle of a process and touch base on various aspects that a process goes through in its life cycle.
tags: [linux]
---

A process is nothing but a running instance of a program. It is also defined as a program in action.

The concept of a process is fundamental concept of a Linux system. Processes can spawn other processes, kill other processes, communicate with other processes and much more.

In this tutorial, we will discuss life cycle of a process and touch base on various aspects that a process goes through in its life cycle.

### I. Code Vs Program Vs Process

Lets first understand difference between code, program and process.

Code: Following is an example of code :

```c
#include <stdio.h>
#include <unistd.h>

int main(void)
{
    printf("\n Hello World\n");
    sleep(10);

    return 0;
}
```

Lets save the above piece of code in a file named helloWorld.c. So this file becomes code.

Program: Now, when the code is compiled, it produces an executable file. Here is how the above code is compiled :

```c
$ gcc -Wall helloWorld.c -o helloWorld
```

This would produce an executable named helloWorld. This executable is known as a program.

Process: Now, lets run this executable :

```c
$ ./helloWorld

Hello World
```

Once run, a process corresponding to this executable(or program) is created. This process will execute all the machine code that was there in the program. This is the reason why a process is known as running instance of a program.

To check the details of the newly created process, run the ps command in following way :

```c
$ ps -aef | grep hello*
1000      6163  3017  0 18:15 pts/0    00:00:00 ./helloWorld
```

To understand the output of ps command, read our article on [7 ps command examples](http://www.thegeekstuff.com/2011/04/ps-command-examples/).

### II. Parent and Child Process

Every process has a parent process and it may or may not have child processes. Lets take this one by one. Consider the output of ps command on my Ubuntu machine :

```c
1000      3008     1  0 12:50 ?        00:00:23 gnome-terminal
1000      3016  3008  0 12:50 ?        00:00:00 gnome-pty-helper
1000      3017  3008  0 12:50 pts/0    00:00:00 bash
1000      3079  3008  0 12:58 pts/1    00:00:00 bash
1000      3321     1  0 14:29 ?        00:00:12 gedit
root      5143     2  0 17:20 ?        00:00:04 [kworker/1:1]
root      5600     2  0 17:39 ?        00:00:00 [migration/1]
root      5642     2  0 17:39 ?        00:00:00 [kworker/u:69]
root      5643     2  0 17:39 ?        00:00:00 [kworker/u:70]
root      5677     2  0 17:39 ?        00:00:00 [kworker/0:2]
root      5680     2  0 17:39 ?        00:00:00 [hci0]
root      5956   916  0 17:39 ?        00:00:00 /sbin/dhclient -d -sf /usr/lib/NetworkManager/nm-dhcp-client.action -pf /run/sendsigs.
root      6181     2  0 18:35 ?        00:00:00 [kworker/1:0]
root      6190     2  0 18:40 ?        00:00:00 [kworker/1:2]
1000      6191  3079  0 18:43 pts/1    00:00:00 ps -aef
```

Integers in second and third column of the above output represent process ID and parent process ID. Observe the figures highlighted in bold. When I executed the command ‘ps -aef’, a process was created, its process ID is 6191. Now, look at its parents process ID, it is 3079. If you look towards the beginning of the output you will see that ID 3079 is the process ID of bash process. This confirms that bash shell is the parent for any command that you run through it.

Similarly, even for processes that are not created through shell, there is some parent process. Just run ‘ps -aef’ command on your Linux machine and observe the PPID (parent process ID)column. You will not see any empty entry in it. This confirms that every process has a parent process.

Now, lets come to child processes. Whenever a process creates another process, the former is called parent while latter is called child process. Technically, a child process is created by calling [fork() function](http://www.thegeekstuff.com/2012/05/c-fork-function/) from within the code. Usually when you run a command from shell, the fork() is followed by [exec() series of functions](http://www.thegeekstuff.com/2012/03/c-process-control-functions/).

We discussed that every process has a parent process, this can bring a question that what will happen to a child process whose parent process is killed? Well, this is a good question but lets come back to it sometime later.

### III. The init Process

When Linux system is booted, First thing that gets loaded into memory is vmlinuz. It is the compressed Linux kernel executable. This results in the creation of init process. This is the first process that gets created. Init process has PID of one, and is the super parent of all the processes in a Linux session. If you consider Linux process structure as a tree then init is the starting node of that tree.

To confirm that init is the first process, you can run the pstree command on your Linux box. This command displays the tree of processes for a Linux session.

Here is a sample output :

```c
init-+-NetworkManager-+-dhclient
     |                |-dnsmasq
     |                `-3*[{NetworkManager}]
     |-accounts-daemon---2*[{accounts-daemon}]
     |-acpid
     |-at-spi-bus-laun-+-dbus-daemon
     |                 `-3*[{at-spi-bus-laun}]
     |-at-spi2-registr---{at-spi2-registr}
     |-avahi-daemon---avahi-daemon
     |-bamfdaemon---3*[{bamfdaemon}]
     |-bluetoothd
     |-colord---{colord}
     |-console-kit-dae---64*[{console-kit-dae}]
     |-cron
     |-cups-browsed
     |-cupsd
     |-2*[dbus-daemon]
     |-dbus-launch
     |-dconf-service---2*[{dconf-service}]
     |-evince---3*[{evince}]
     |-evinced---{evinced}
     |-evolution-sourc---2*[{evolution-sourc}]
     |-firefox-+-plugin-containe---16*[{plugin-containe}]
     |         `-36*[{firefox}]
     |-gconfd-2
     |-gedit---3*[{gedit}]
     |-6*[getty]
     |-gnome-keyring-d---7*[{gnome-keyring-d}]
     |-gnome-terminal-+-bash
     |                |-bash-+-less
     |                |      `-pstree
     |                |-gnome-pty-helpe
     |                `-3*[{gnome-terminal}]
     |-gvfs-afc-volume---2*[{gvfs-afc-volume}]
     |-gvfs-gphoto2-vo---{gvfs-gphoto2-vo}
     |-gvfs-mtp-volume---{gvfs-mtp-volume}
     |-gvfs-udisks2-vo---{gvfs-udisks2-vo}
     |-gvfsd---{gvfsd}
     |-gvfsd-burn---2*[{gvfsd-burn}]
     |-gvfsd-fuse---4*[{gvfsd-fuse}]
     ...
     ...
     ...
```

The output confirms that init is at the top of process tree. Also, if you observe the text in bold, you will see the complete parent child relation of pstree process. Read more about pstree in our article on [tree and pstree](http://www.thegeekstuff.com/2009/03/tree-and-pstree-visualize-unix-processes-and-directories-in-hierarchical-structure/).

Now, lets come back to the question (we left open in the last section) about the consequences when parent process gets killed while child is still alive. Well in this case, the child obviously becomes orphan but is adopted by the init process. So, init process becomes the new parent of those child processes whose parents are terminated.

### IV. Process Life Cycle

In this section, we will discuss the life cycle of a normal Linux process covers before it is killed and removed from kernel process table.

- As already discussed, a new process is created through fork() and if a new executable is to be run then exec() family of functions is called after fork().  As soon as this new process is created, it gets queued into the queue of processes that are ready to run.
- If only fork() was called then it is highly likely that new process runs in user mode but if exec() is called then the new process will run in kernel mode until a fresh process address space is created for it.
- While the process is running, a higher priority process can pre-empt it through an interrupt. In this case, the pre-empted process again goes into queue of processes that are ready to run. This process is picked up by the scheduler at some later stage.
- A process can enter into kernel mode while running. This is possible when it requires access some resource like text file which is kept on hard disk. As operations involving access to hardware may take time, it is highly likely that process will go to sleep and will wake up only when the requested data is available.  When the process is awakened, it does not mean that it will start executing immediately, it will again queue up and will be picked for execution by scheduler at appropriate time.
- A [process can be killed](http://www.thegeekstuff.com/2009/12/4-ways-to-kill-a-process-kill-killall-pkill-xkill/) through many ways. It can call exit() function to exit or can process [Linux signals](http://www.thegeekstuff.com/2012/03/catch-signals-sample-c-code/) to exit. Also, some signals cannot be caught and cause the process to terminate immediately.
- There are [different types of Linux process](http://www.thegeekstuff.com/2012/02/unix-process-overview/). Once the process is killed, it does not get completely eliminated. An entry containing some information related to it is kept in the Kernel process address table till the parent process explicitly calls wait() or waitpid() functions to get the exit status of child process. Until parent process does this, the terminated process is known as zombie process.

### V. LINK

1. [http://www.thegeekstuff.com/2013/07/linux-process-life-cycle/](http://www.thegeekstuff.com/2013/07/linux-process-life-cycle/)
