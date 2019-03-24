---
title: A programming language is not just a language
date: "2018-07-23T00:00:00.000Z"
description: In theory, a programming language is just a set of keywords, syntax, semantics and operations, with some supporting libraries. Most of programming languages have if, else, do, while, for, switch, case, when, string, array, hash ..etc.. So what’s the difference?
tags: [computer-science]
---

We often hear both novice programmers and experienced programmers say “A programming language is just a language. The important thing is the programs/software that you write.”

It irritates me to no end to hear that kind of statement. Of course a programming language  IS NOT just a language.

In theory, a programming language is just a set of keywords, syntax, semantics and operations, with some supporting libraries. Most of programming languages have if, else, do, while, for, switch, case, when, string, array, hash ..etc.. So what’s the difference?

Well, when we talk about programming languages in reality, it is much more than that.

Here are a few things you must consider when you choose a programming language for a software project.

**I - Reliability**

Of course, a language must be reliable in order to be useful when we write software.

We cannot use a language that in the language spec it said A, then when we write a program with perfect syntax and semantics, then get B.

For example, all the languages have problems with implementing floating point numbers. But some languages have more accurate implementations than some others. So some languages can be used in really high-demand scientific calculations, while others cannot.

The reliability also exists in many different areas of a programming languages, such as interacting with operating systems, interacting with devices.

**II - Security**

At language’s level, the syntax of a language will affect the security of programs written in that language. For example if a language allows developers to write some weird statements, they can potentially inject some unforeseen code that execute malice functions. 

Or some dynamic languages that expose too much meta programming also allow developers to write unsafe programs.

**III - Performance**

People often hear that “Language A is fast” or “Language B is slow”.

But they don’t even know “fast compare to what?” or “slow compare to what?”

**1) Slow or fast compare to execution requirements**

Based on the requirements, for example Intensive Graphics/Video Processing, Intensive Number Computation, Huge Amount of Data Processing, Massive Parallel Processing, Web Application, we will have some languages running faster than some other languages for a specific requirements.

We don't talk about compilers, interpreters or runtime here yet. At language's level, if a language has first-class support for certain functionality, it will be better than other languages that don't have it.

For example, the way Erlang has built-in support for cross-virtual-machine parallel processing and supervising makes it a better language for parallel processing than other languages in which developers have to write inter-thread, inter-process communication and thread-group, process-group management , lock, mutex by themselves. 

**2) Slow or fast compare to other languages relatively**

This one is more or less belongs to runtime of programming languages.

For example, here are order from fastest to slowest executions of 3 languages:

C:       `printf(“Hello, World.\n");`

Java:  `System.out.println(“Hello, World.”);`

Ruby:  `puts ‘Hello, World.’`

However, when we write real production software, comparing things like above doesn't make a lot of value in reality.

For example, executing one line of Java code, for argument sake just assume generously, can be 5 times faster than executing one line of Ruby code. But in real life, things I have to write with thousands lines of code in Java most of the time take only about hundred lines of code in Ruby,  even less. And the bigger the software application is, the bigger is the gap between numbers of lines of code.

So a real complex Ruby program can run 10 times faster than a  program with same functionality written in Java.

**IV - Supported platforms**

Some languages are available only on Window. Some others  available only on Mac, or only on Linux ...etc..

There are tons of operating systems running on computers, tablets, phones, embedded hardware, so when you write a program, depends on what platforms you want to support, you have to choose a right language.

**V - Productivity**

Productivity of a language is how fast a good developer  team can use a language to write a production-ready software.

Let assume that a team has good computer science knowledge and good software development skills, some languages will allow them to write software faster than other languages.

 In the realm of web-based applications, I have 2 very concrete examples.

1) Around 2007, when I and two friends of mine opened a startup company that built web-based enterprise software for fashion industry, we were 3 kick-ass Java and J2EE engineers with tens years of experiences building large J2EE projects.

However, by that time I got familiar with Ruby and Ruby on Rails for awhile, so I asked them to build our software in Rails. They disagreed, so we decided to test. We worked on a J2EE application for fashion industry for a year. Afterward, in just 3 months, we built a Ruby on Rails application that had all the features of the J2EE applications we just built, and some more.

(My company failed because of the economy crisis 2008-2009, but it was beside the point)

2) Now, in 2017, we develop a large-scale enterprise application for a big corporation. As part of this project, we replaced a cryptographic services and an API system for web services written in Java. During a 2-week iteration in January 2017, I and another developer in my team wrote a whole new system in Ruby, replaced the work of 5 Java developers who wrote the Java system in more than one year.

Some languages will allow you to write code faster, more testable and maintainable than the others, because of the languages’ syntaxes, semantics and features.

**More example:** In the realm of Object Oriented Programming, an OOP dynamic typed language will allow developers to get rid of a lot Design Patterns that were created to circumvent the extendability and maintainability  of a software design, for example Abstract Factory Pattern, Simple Factory Pattern, Visitor Pattern, Command Pattern, Decorator Pattern, Template Method Pattern, just to name a few. And the whole messy things with Dependency Injection will also go away.

Less code to write, less Object Hierarchy to worry about. And less Object Hierarchy management means less computing resources consumption too.

**VI - Quality of compilers / interpreters**

Programming languages need something to make programs written in them into machine-executable.

That something can be either a compiler or an interpreter.

Compilers and interpreters are written by programmers, and some programmers are better than others, so some compilers and interpreters are better than others.

Some compilers/interpreters are really bad with stack overflow problems. Some compilers/interpreters are really bad with memory management or garbage collector. Some compilers/interpreters really have bad implementations of parallel processing, for example Global Interpreter Lock in MRI Ruby interpreter.

It doesn’t matter how beautiful and effective the syntax and semantics of a language are, if it has a bad implemented compiler or interpreter, we must think hard before we use it.

For example, before Ruby 2.0, if there were some tasks that had some fair amount of parallel processing or data processing, between Ruby and Python I will choose Python, although from language’s level  they were  more or less the same, and Python’s syntax was slightly uglier than Ruby syntax.

Or choosing between C and Go. C has better performance than Go, but Go compiler has compile time much faster than C. So for programs that need a lot of compiling-testing-running cycle, and don’t require super heavy performance, Go is a better choice than C. 

On the other hand, if you need super fast performance, C runtime is better than Go runtime.

**VII - Ecosystem**

Ecosystems of programming languages consist of:

- Tools to write code, debug code, run test,

- Tools to package and deploy software.

- Tools to facilitate the interactions between software written in those languages to different parts of a computing systems. These things usually are standard libraries, external libraries, extendable frameworks ...etc..

- Runtime environments for the software written in those languages, can be metal barebone executable code, or languages’ virtual machines, with certain environmental supports.

 Some programming languages have better eco systems than others. So programming languages are not just languages. Eco systems of some languages will make them more suitable, more productive, and even more feasible than other languages for specific purposes.

**VIII - Availability of workforce**

When we develop a software, we need people who can write programs.

It doesn’t matter how cool a programming language is, how great the compiler/interpreter is or how whatever great of whatever criteria are, if we cannot find enough good programmers for that language, we can not use it in our project.

For example, on certain project, I had requirements to build a massive parallel processing platform. Erlang and Elixir would be great candidate for this kind of application. But I could not find enough Erlang and Elixir programmers on the market, so I went with Go programming language, a very good language for parallel processing, with good performance, but with super ugly syntax and some immature supported libraries.

**IX - Special features of languages**

A lot of programming languages can be considered as generic purpose programming languages, i.e. they can be used to write almost any kinds of applications.

However, some of them were born for a reason, with very specific purposes, so if we use some languages for those purposes, it will be better than using them for other purposes.

For example C programming language. Arguably we can use C to write anything, from embedded software running on small devices to operating systems running on computers to native stand-alone applications, to web-based applications ...etc …

But in the 21st century, no sane person will use C to write CGI scripts running as web-based applications. People would use Java, Python, Ruby, PHP, Elixir, Go ...etc.. and God forbid, .NET, C#.

Or R programming language is very good for statistical processing. Arguably we can write library to extend R to write graphical applications or games, but nobody will really do it.

So a language is not just a language, and one language cannot really arbitrarily replace another.

And some languages are just flatly out of date. For example, COBOL can be used to write business applications. Java also can be used to write business applications. So can Ruby and other languages. So why do we select one instead of others?

In case of COBOL, unless you are working for some dinosaurs, you don’t even have mainframes to run COBOL to begin with. In case of Java, anything you write in 500 lines of Java, you can write in 50 lines or less of Ruby. Java is sooo 1990s. The fact is a lot of companies and people are still using Java now does not mean you have to be them.

***Some languages have syntax and facility that allow you to define Domain Specific Language (DSL), building higher abstract language on a language, so you can write software faster, easier to understand, maintain and extend.***

**X - Beauty of Syntax and Semantics**

Most of programming languages have if, else, do, while, for, switch, case, when, string, array, hash ..etc.. (Functional programming languages don’t have loop).

Sure, but some languages combine those elements in a more pleasant manner than others.

For example, if you just want to print a string “Hello, world.” to screen, something like

```c
puts ‘Hello, world.’
```

is much better than 

```c
package main

import "fmt"

func main() {

  fmt.Println("Hello, world.")

}
```

In the second example, a lot of boiler-plate bullshit code just to print a line “Hello, world”. In real production software, there will be a lot more boiler-plate bullshit code if you don’t choose a language carefully.

But as mentioned above, sometimes we don’t have a choice, but have to choose an ugly-syntax language because they have some criteria we need for our requirements.

However given that we have a choice, working with languages that have beautiful syntax and semantics will give us much more happiness than working with ugly languages.

Java has a very clean, although somewhat verbose syntax, but its ecosystem and libraries for enterprise development are absolutely terrible. 

Go has even worse syntax. The Go syntax has a lot of unnecessary boilder-plate code, for example for loop with “range” keyword. The way Go handles error is also absolutely terrible. Now it is the 21th century and Go still doesn’t have exception. Programmers must say if error this, if error that, as if now is still 1970s, when Ken Thompson invented C with Dennis Ritchie.

So for the same purpose, more or less same functionality, we should choose programming languages with more beautiful syntax and semantics instead of the ugly ones.

**Conclusion**

In theory, when you are still in kindergarten or in primary school, programming languages are just languages. However, if you are any kind of decent software engineer, for the love of programming, please stop saying “A programming language is just a language”.

Of course, if you are a terrible programmer, it doesn’t really matter whether you write one line or five lines of code to print the string “Hello, world.”, because it is all you can write anyway. So please feel free to dream all your life long “A programming language is just a language.”.


**XI. LINK**

1. [http://hanoian.com/content/index.php/20-a-programming-language-is-not-just-a-language](http://hanoian.com/content/index.php/20-a-programming-language-is-not-just-a-language)
