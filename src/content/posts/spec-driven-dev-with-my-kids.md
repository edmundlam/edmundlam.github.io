---
title: "Spec Driven Development with My Kids"
date: "2026-07-19"
description: "Building a simple typing game with my kids"
author: "Edmund Lam"
tags:
  - "Programmimg"
---

My daughter has started to get interested in typing, and all the free typing games we found on the
web have the following issues:

1. They are not fun enough, e.g. targeted towards adults leaning how to type (
   e.g. [keybr](https://www.keybr.com/), [monkeytype](https://monkeytype.com/))
2. They are kids games, but they require you to sign up, or overall the UI is annoying
3. They are kids games, but they are too difficult or stressful (countdown timers, lives, losing)

So I decided to see if we could create our own game together, with exactly what my daughter would want. We briefly
discussed
what kind of theme it should be (picking flowers), and then I told her to write down all the details of the game on a
piece of paper. Here was the result:

![Kids' flower game specification](/images/flower_game_note.webp)

Pretty nice spec! So it looks like she wants a game where you pick flowers, and when you pick enough flowers you go to
the next level. Each level has more and more keys, and for some reason she doesn't want to learn all the keys (thats
ok).

## Human Refinement

My next step was to refine the spec. There were a few details that she had not thought about that we could go over
together. We first took a photo of the page and gave it to Claude to transcribe, and then
we had a working spec that we could edit:

```markdown
Learn to type flower game. You have to pick flowers by typing the right keys.

10 Levels.
Level 1: F, G
Level 2: F, G, D, K
Level 3: F, G, D, K, S, I, A, ;
Level 4: F, G, D, K, S, I, A, ;, T, U
Level 5: F, G, D, K, S, I, A, ;, T, U, R, I
Level 6: All keys
Level 7: Little words
Level 8: Easy words
Level 9: Medium words
Level 10: All words

When you pick enough flowers, you go to the next level.

The keys Q, W, Y, O, P, Z, X, C, V, B are not used.

When you complete all the levels, you get a diploma that you can print.

Each level needs three stars. Each level is five minutes.
```

For the first refinement, I decided to not go with AI. Here are some questions that I asked, and the eventual changes to
the first spec.

> "How many flowers do you need to pick to get three stars?"

```markdown
Each level can score up to 3 stars.

To get one star you need to pick 5 flowers, to get two stars you need to pick 10 flowers, and to get three stars you
need to pick 15 flowers.
```

> "How do you get to the next level?"

```markdown
You can only go to the next level if you get 3 stars in the current level.
```

> "In the first 5 levels, we know what keys you want to work, but is it just one letter per flower?"

```markdown
At level 1, it is just 1 letter that you have to type, but as you go up the levels, you have to type more letters at the
same time.

Level 2, its either one or two letters

Level 3, its two letters

Level 4 its two or three letters

Level 5 its three letters
```

> "Can you restart?"

```markdown
You can restart whenever you want, but your score will be reset to zero.
```

"What does the diploma look like?"

```markdown
The diploma has a bouquet of flowers.
```

Here is the final non-AI assisted spec:

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

## AI Powered Refinement

With the spec in hand, I wanted to make sure we had thought through all the details before building anything. I turned
to Claude to help us think through the edge cases and implementation details.

My prompt was simple:

> "My kid has an idea for a typing game, we put the info here: typing/flower-game/spec.md. Interview us to clarify any
> other things that we might need to know before creating the HTML game. Then we will write those details in a second
> markdown file."

Claude used an interactive question tool to ask us clarifying questions in rounds, covering core mechanics, visuals and
themes. Some details that we got out of this:

1. Do multiple flowers appear on the screen? How the targeting of flowers work?
2. What happens visually when you pick a flower
3. What does the final diploma look like?
4. Do we store progress (yes, localStorage)

We answered each round together, discussing the options. My daughter especially had strong opinions about having rockets
coming out of the flowers when picked (visible flames!) and the flower colors (red, blue, light purple, or pink petals
with yellow centers).

The result was a more complete design document that captured everything we had decided. You can see the
full [design.md here](https://github.com/edmundlam/lab/blob/master/kids/typing/flower-game/design.md) if you're
interested in the details.

## AI Powered Implementation

With the design document complete, the next step was to actually build the game. Claude Code running with GLM4.7 did a 
decent one-shot, with the result being a single `index.html` file that I could host statically on Github Pages.



There were bugs, of course. The first version didn't handle the level unlocking correctly. The timer didn't stop when
you completed a level. Later, we added a "10-second bonus time" feature once you reached 3 stars, something that
wasn't in the original spec but made the game more fun.

We iterated together, testing the game with my daughter and making adjustments. She'd point out what didn't feel right,
and I'd work with Claude to fix it. She was very excited to show it to the rest of the family. 

You can go try out the game [here](https://edmundlam.github.io/lab/kids/typing/flower-game/).

## Final result:

When my kids ask me what I do for work, I always find it difficult to explain. "I work with computers", or "I try to get
computers to do
what I want them to do and figure out why it is not doing what I do" are my common answers. As you can see I am not very
good at explaining it. But hopefully here with this activity, I showed her a little bit of what I regularly do at work.

As my kids have grown up I've always pondered how I would introduce my kids to coding. What I had not considered was
that
that the first part of software development I would show her would not be the code, but the other parts of the craft:
writing a spec, refining the requirements and thinking through the edge case even before a single like of code is
written.

I'll be honest, I didn't even attempt to explain to her how the code works. But eventually she may get curious and start
to
ask, "How does it work"? And then we can start peeking on the other side.

In the meantime, we'll have fun creating games together.










