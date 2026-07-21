---
title: "Spec Driven Development with My 8-Year-Old"
date: "2026-07-19"
description: "My daughter wrote a game spec on paper. We then turned it into a typing game with rocket-powered flowers."
author: "Edmund Lam"
tags:
  - "Programming"
  - "Parenting"
  - "Kids"
  - "Typing"
---

My 8-year-old daughter has started to get interested in typing. Most typing games online are either built for adults,
require sign-ups, or stress kids out with countdown timers and lives.

So I decided to see if we could create our own game together, with exactly what my daughter would want. We chose a 
theme together (picking flowers), and then I asked her to write down all the details of the game on a
piece of paper. Here was the result:

![Kids' flower game specification](/images/flower_game_note.webp)

Pretty nice spec! So it looks like she wants a game where you pick flowers, and when you pick enough flowers you go to
the next level. Each level adds more keys, and for some reason she doesn't want to learn all the keys (that's
ok!).

## Refinement

We took a photo of her note and had Claude transcribe it into a working markdown document, then went through it together
to fill in the gaps she hadn't thought about yet. A few of the questions I asked, and what came back:

- **"How many flowers do you need to pick to get three stars?"** → 5 flowers for one star, 10 for two, 15 for three.
- **"How do you get to the next level?"** → Only after hitting 3 stars in the current one.
- **"Is it just one letter per flower?"** → Level 1 is one letter, but then it scales up - two letters by level 3, three by
  level 5.
- **"Can you restart?"** → Anytime, but your score resets to zero.
- **"What does the diploma look like?"** → A bouquet of flowers.

Here is the spec as it stood after the first refinement:

```markdown
# Learn to Type Flower Game

You have to pick flowers by typing the right keys.

## Levels

- **Level 1:** F, G
- **Level 2:** F, G, D, K
- **Level 3:** F, G, D, K, S, L, A, ;
- **Level 4:** F, G, D, K, S, L, A, ;, T, U
- **Level 5:** F, G, D, K, S, L, A, ;, T, U, R, I
- **Level 6:** All alpha keys except the keys mentioned below that are excluded
- **Level 7:** Little words
- **Level 8:** Easy words
- **Level 9:** Medium words
- **Level 10:** All words

The keys **Q, W, Y, O, P, Z, X, C, V, B** are not used.

At level 1, it is just 1 letter that you have to type, but as you go up the levels, you have to type more letters at the
same time.

Level 2, its either one or two letters
Level 3, its two letters
Level 4 its two or three letters
Level 5 its three letters

When you pick enough flowers, you go to the next level.

Each level can score up to 3 stars.

To get one star you need to pick 5 flowers, to get two stars you need to pick 10 flowers, and to get three stars you
need to pick 15 flowers.

You can only go to the next level if you get 3 stars in the current level.

Each level you have a time limit of 5 minutes.

You can restart whenever you want, but your score will be reset to zero.

When you complete all the levels, you get a diploma that you can print. The diploma has a bouquet of flowers.

```

## AI Assisted Planning

Ok with a decent spec in hand, I did what I now regularly do in my real workflows: I get an AI to help me further plan out the
design. We opened up Claude Code together to help us think through the edge cases and implementation details.

My starting prompt:

> "My kid has an idea for a typing game, we put the info here: typing/flower-game/spec.md. Interview us to clarify any
> other things that we might need to know before creating the HTML game. Then we will write those details in a second
> markdown file."

Claude used its `AskUserQuestion` tool to ask us clarifying questions in rounds, covering core mechanics, visuals and
themes. Some details that we got out of this:

1. Do multiple flowers appear on the screen? How does the targeting of flowers work?
2. What happens visually when you pick a flower?
3. What does the final diploma look like?
4. Do we store progress? (yes, localStorage)

We answered each round together, discussing the options. My daughter especially had strong opinions about having rockets
coming out of the flowers when picked (visible flames!) and the flower colors (red, blue, light purple, or pink petals
with yellow centers).

The result was a more complete design document that captured everything we had decided. You can see the
full [design.md here](https://github.com/edmundlam/lab/blob/master/kids/typing/flower-game/design.md) if you're curious.

## AI Powered Implementation

With the design document complete, the next step was to actually build the game. Claude Code running with GLM4.7 did a
decent one-shot, with the result being a [single static html file](https://edmundlam.github.io/lab/kids/typing/flower-game/)
that I could host on GitHub Pages. (Note: the game is not very mobile friendly, but then again, why would you
practice typing on mobile?)

![Flower game main menu](/images/flower-game-main-menu.webp)

![Flower game action](/images/flower-game-action.webp)

There were bugs, of course. The first version didn't handle the level unlocking correctly. The timer didn't stop when
you completed a level. Later, we added a "10-second bonus time" feature once you reached 3 stars, something that
wasn't in the original spec but made the game more fun.

We iterated together, testing with my daughter and adjusting as she pointed out what didn't feel right. Once it was good
enough for her, she was very excited to show it to the rest of the family.

## Conclusion:

When my kids ask me what I do for work, I always find it difficult to explain. "I work with computers", or "I try to get
computers to do what I want, and then figure out why they don't do it correctly" are my common answers.
As you can see I am not very good at explaining it. But this small activity gave me a way to show her a
little bit of what I regularly do at work.

And not the part I expected. I assumed the first thing that I'd teach her about software development was how to code.
Instead, it was the parts surrounding the coding: writing a spec, thinking through the requirements, and testing the results
after the code is done.

I'll be honest, I didn't even attempt to explain to her how the code works. But eventually she may get curious and start
to ask, "How does it work?" And then we can start peeking behind that curtain too.

In the meantime, we'll have fun creating games together.

![Flower game diploma](/images/flower-game-diploma.webp)



