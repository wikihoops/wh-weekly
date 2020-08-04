---
layout: default
permalink: "/author-guidelines"
---

## Guidelines for Authors

### New Writers

If you would like to contribute, please contact one of [the contributors](https://github.com/wikihoops/wh-weekly/graphs/contributors) as a first step.

### New Posts

To create a post, add a file to the `_posts` directory with the following format:

    YEAR-MONTH-DAY-the-title-of-your-post.md

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers.

All posts must use the following structure: 

    ---
    title: The Title of your Post
    author: author_name
    spoilers: [This is a topic, And another one, Bucks vs Lakers (March 6)]
    game_recommendations: [Bucks vs Lakers (March 6), Lakers vs Clippers (March 8)]
    ---
    Intro paragraph(s). Don’t add a title if it’s the same as the title-variable.
    Also, no spoilers here!

    <!--spoilers-->

    The rest of your content (may contain spoilers)

If there are no spoilers or recommendations remove the respective line.

It goes without saying that you’re not supposed to touch any files ouside the `_posts` directory without ~~the express written consent of the NBA~~ permission from the maintainer. :)

### Spoilers

A spoiler tag shouldn’t be a spoiler in itself. I.e. instead of `Hardens’s 60-points` use `James Harden`.

Content before the `<!--spoilers-->`-separator must not include spoilers. An example post can be found in the `_drafts` directory.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. You can use:

    ## Primary Heading *
    ### Secondary Heading

    **Bold** and _italic_ text

    [Link title](url) and ![Image description](src)

    - Bulleted
    - List

    1. Numbered
    2. List

For more details see [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax).

**\* Please avoid using level-1 headings (#)** as they are reserved for page titles.

### Headlines

Please use _Chicago Style_ to capitalize headlines. General rules are:

- Capitalize the first word in the title
- Capitalize the last word in the title
- Capitalize the important words in the title

If in doubt you can use [this tool](https://headlinecapitalization.com/).

### Embed HTML

To embed HTML in your post use `nomarkdown` tags:

    {::nomarkdown}
      <div class="some-example-HTML">
        ...
      </div>
      <script>
        /* ... */
      </script>
    {:/nomarkdown}