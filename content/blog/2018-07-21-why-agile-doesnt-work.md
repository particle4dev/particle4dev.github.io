---
layout: post
title: Why Agile doesn’t work
tags: [computer-science]
---
**Why Agile doesn’t work**

Under Agile, there are many specific methodologies: popular: Scrum, Kanban, XP, not so poplar: DSDM, FDD, ASD, Lean, Crystal. Agile Development Process supposes to achieve the following goals:

* Higher productivity

* Better-quality products
* Reduced time to market
* Improved stakeholder satisfaction
*  Better team dynamics
*  Happier employees

Not quite so in the reality.

This is not an academic paper on Agile and its sub methodologies. This article will evolve by time, when I remember more things, perceive more things and have different ideas about things I wrote.

I will write only about things that cause Agile to fail, not the whole Agile methodology, team, events, artifacts and all.

As Scrum is the most popular in the industry by 2018, and others are not much different, with the exception of XP, I will discuss a broad view of Agile, and use specific illustration with Scrum to explain my opinion why Agile doesn’t work.

**I. Agile in general, why practices don’t work?**

**1. Design by Committee**

In Agile, the role of an Architect is reduced from the almighty God of Software Design to a Proposal Writer. After the architect draw diagrams, make broad high levels of components, workflows and interactions between different parts of a system, the whole team or senior people on the team will have meetings to discuss about the design, suggest comments, concerns, improvements ...

**Theory**: This process will make the design better by having more people looking at the architecture, chipping in best solutions, practices.

**Reality**: A bunch of juniors who never know real fundamental computer science ask a few senior people to teach them about basic things very similar to why 2 + 2 = 4, but not 1, not 2, not 3, not 5, not 6, not 7 … all the way to not millions.

**Real goal of idiots**: Avoid responsibility. Managers and senior people nowadays, including the architects, are often very bad at technologies and engineering. So they want to have a bunch of people to hide behind, if something goes wrong with the design. Nobody wants to take individual responsibility.

**Result**: Endless stupid meetings that look like Computer Science 101\. Endless stupid non-tech arguments such as “It is not popular in our company”, “I have never seen anybody use it”, but not technical merits of the solutions. At the end of the day, it will be a meh meh design that every idiot can understand but nearly useless in implementation.

**2. Story writing**

In Scrum, stories supposed to replace huge ream of papers with useless diagrams and thousand pages of documentation.

**Theory**: They should be written in a way that there is enough information for architects and programmers to work on, and enough for QAs, stakeholders to verify and accept the features.

**Reality**: All the stories are written too shallow, not enough information for anybody to do anything.

**Real goal of idiots**: Avoid hiring real architects to cut cost. Use a bunch of people who don’t know what they are talking about to write useless text.

**Result:** A bunch of useless stories that need much more clarifications. Endless meeting to discuss about stories and there is no real place to record real architecture design as the big picture for whole system.

**3. Pair programming**

Pair programming is two programmers sit at the same computer, work on the same task.

**Theory**: Two programmers have more ideas, more brains, more eyes than one. They can work better together to produce a product with faster speed and better quality.

**Reality**: Actually there are both good and bad things in pair programming. Good: Bring up new person up to speed very fast. I experience this first hand many times. When there is a new person join the team, the best way to bring him up to speed is pairing him with an experienced engineer on the team. Also, when a person must learn a new technology fast, efficiently, pair him with a person that is very good at that technology. It will reduce a lot of studying, struggling time. Bad: A lot of companies use pair programming to avoid responsibility. Two guys making an error is easier to blame something else, instead of admitting human being stupidity. Abuse billable hours: A lot of consulting firms, notoriously ThoughtWorks, advocate Pair Programming as a way to improve productivity and quality. But actually they put two consultants to work on a task that can easily be done by one.

**Real goal of idiots**: Avoid responsibility. Double the costs of staffing. Have a bunch of idiots wasting time of people pairing with them on the job, so those idiots can get experience to write into their resumes (not really learn). Slave driving: Stupid management people think that two people working at the same computer would prevent them to play games or bullshitting on social media as in the case they work alone.

**Result:** Good: Bring people up to speed with the team or with new technologies. Bad: Wasting time of good engineers on idiots. Wasting money to pay double for people the projects don’t need. Productivity and Quality go down, because good people are busy pairing with idiots. Sometimes two guys play games or posting bullshit together, so the project loses two guys instead of one J.

**4. XP (eXtreme Programming)** eXtreme Programming (XP) is a sub methodology of Agile. It is not just one single practice as the things above. It is worth mentioning here, because it is fundamentally different than other Agile’s sub methodologies. XP advocates that project teams  just need to have a minimum, just enough ideas about business requirements and the software they will build, then just write it. No need for lengthy documents, endless meetings, nothing. Requirements - Code – Test – Deliver. Easy to see it is hard to work with complex requirements. And XP requires a team of all good engineers who know what they are doing, good QAs, good stakeholders. In 2018, that kind of teams exists only in dream and theory. Last time I have seen such a team was in 2002\.

**II. Agile: Applied in Scrum**

**1. Scrum team structure**

- Project Manager: Not really required in Scrum, but always there.

- Product Owner: Key stakeholder

- Scrum Master: Scrum has a formal definition for this. To me, it is a function that can be performed by any reasonable sane people in the team.

- Development team: Go read about formal definition somewhere else.

**Problem**: Not really, the structure is reasonable. It only has problems when you have an idiot as Project Manager or Product Owner or Scrum Master, or when you have a bunch of idiots as development team. In many cases, if the Scrum Master is an idiot, he hurts the project the most, because he talks too much, calls for meetings that nobody needs, insists on stupid ceremonies … But it is not really Scrum or Agile trouble in and of itself. Idiots practice all methodologies J

**2. Scrum artifacts**

- Product Backlog

- Sprint Backlog

- Increment In this section, I will do analysis on all of the artifacts together.

**Theory:** Go read about them in Agile documents.

**Reality:** Despite epic stories or whatever, the wholesome picture is missing right there.   

The whole system has something like bottom-up documents, with stories create epics, epics create the whole software.

But in majority of Scrum projects, there are a lot of tiny but important parts lost somewhere in between epics, and the wholesome picture looks like an incomplete product.

**Real goal of idiots**: Idiots don’t have vision. They don’t have architectural capability. So they prefer to piece small pieces together to create something, instead of creating a real useful product.

**Result:** Every sprint achieves something. At the end, if the project is well executed, even all the stories are finished and accepted. But … there is no useful product. Just a giant complex system consists of stories stitched together.  That system can only perform half-ass functionality. Or worse, a project can go on forever, stories completed, then new stories created. Functionalities created but can’t really be used.

**3. Scrum events** In this section, I will do analysis separately on each event. Some of them are not actually bad, unless performed by idiots. But they are not Scrum’s problems. In that case, I will just list the name and omit the analysis.

a) The Sprint A sprint is a time-boxed period during which specific work is completed and made ready for review. Sprints are usually 2-4 weeks long but can be as short as one week.

**Theory:** Break long-time projects into manageable durations, each duration shows some accomplishments. Easier to do the planning, and have better vision of progress.

**Reality**: Many project teams choose 2-week or 3-week sprints.

**Real goal of idiots**: Don’t have to see too big a picture. Don’t have to see too far. Have something to show every sprint, to brag with upper managements.

**Result:** Short sight vision. With 2-week or 3-week sprints, people don’t want and don’t dare to make big things happen. Teams are afraid to take risks, to avoid losing sprint velocity, avoid creating more backlogs. As a result, it is incredibly hard to create good products with good technologies. Just a piece of meh meh software that at the end of the day, nobody is happy with it, least of all the users.


b) Sprint Planning Sprint Planning team meetings are time-boxed events that determine which product backlog items will be delivered and how the work will be achieved.

**Theory:** Sprint Planning prepares the team better to work on the coming sprint. It provides the team with a clear list of stories to execute, with estimate workloads.

**Reality:** Sprint planning usually consists of stories picking (choosing what stories to execute in the sprint) and stories estimation (Give story some points based on complexity). Stories estimation: Each story is given a point number from Fibonacci numbers. The numbers are based on complexities of stories. Some team (very few) choose points based on time to complete, rather than complexity.

**Real goal of idiots:** Have some things to whip the team with, as driving slaves. It is easier look at small pieces and blame who do what in the case something wrong happens.

**Result:** Sprint is a terrible concept, especially anything between 1-week to 3-week sprints, so the planning doesn’t really help. Wasted time in stories estimations. Given a complexity point, what does it tell people about the story? A difficult story may takes time? However, easy story with a lot of mundane tasks that every idiot can do might also take time too, because there are too many easy things to do. Estimation based on time, contrary to Agile theory and popular belief, maybe a little more useful, because it helps people to divide their workloads and work hours a little bit better. But not much better.

c) The Daily Stand-up The Daily Stand-up is a short communication meeting (no more than 15 minutes) in which each team member quickly and transparently covers progress since the last stand-up, planned work before the next meeting, and any impediments that may be blocking his or her progress.

**Theory:** The Daily Stand-up helps project leaders to know the progress of the team. Team members know each other’s progresses, and can help each other to overcome the blockers.

**Reality:** Most of software engineers don’t want to wake up early in the morning. So most teams have standups after 10:00 AM their times. Few have earlier standups, for example around 9:00 – 9:30 AM. Many teams that have people across time zones in the U.S. have meetings about 12:00 PM EST, which is 9:00 AM PST. Many teams that have people around the world have even more bizarre times, or have multiple standups per day depends on time zones of the members. Many startups go over 30 minutes or more, depends on teams. Daily standups cut the work day into two parts: Before standup and After standup.

**Real goal of idiots:** Micro management. Dumb managements don’t know tech, cannot comprehend technical and technological progresses, so they rely on daily reports.

**Result:** As mentioned in Reality, standups cut the work day into two parts: Before standup and After standup. If the one of the parts is early in the day, the developers still have a big chunk of the day to work. However, it must be early in the morning, and nothing good happens when a developer must wake up too early. The whole day’s productivity will be affected. If the time division happens somewhere at middle of the day or a little later, most of the people will only work half a day. One of the parts (Before standup or After standup) will be churning time, bullshit time or reading time. It is basic psychology. Developers wake up late in the morning, standup time is coming, why work? We can always work after standup. Or standup is done, we finish our reports for the day. Why work? Let work tomorrow morning. An 8-hour work day turns into a 4-hour work day, or even worse. Daily standup also distracts people from long term thinking, just work on mundane things to have something to report at standup. It also creates bullshit mentality. As long as a developer has something to report as standup, he doesn’t really care about real work. I have seen people who report bullshit for months without the project managers, scrum masters or any management people know anything about it. And if it is not my project, I don’t even care. Just watch the bullshit for fun.

d) The Sprint Review

e) The Retrospective

**III. Conclusions**

Agile methodology and its sub methodologies were born to address the short coming of previous methodology: Waterfalls.

However, Agile fails to address the most important component of a software project: Human being.

Arguably, certain parts of Agile tries to overcome the short coming of the teams. However, if the teams consist of certain amount of idiots, especially project managers and scrum masters, the results are terrible.

And in order to be idiot-proof, Agile creates idiotic things, most notable of all are Sprint and Daily standup.

All the methodologies so far try to fix wrong things. They don’t fix people. Especially they don’t fix stupid people.
It is similar to the case a manufacturer produces an unsafe car. Instead of fixing the safety issues to make  the car safer, they attach more seat belts and airbags into the car.

If people have no required skills: train them. If they are too stupid and don’t want to learn: fire them and look for better people. Instead of doing that, companies and organizations try to create idiot-proof methodologies. But they don’t know that the world will keep making better idiots J

Investing more in education instead of investing in methodologies will fix the problem.

**IV. LINK**

1. [http://hanoian.com/content/index.php/26-why-agile-doesn-t-work](http://hanoian.com/content/index.php/26-why-agile-doesn-t-work)
