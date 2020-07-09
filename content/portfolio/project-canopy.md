---
title: "Centralizing Species Data"
date: 2020-04-26T22:51:27-04:00
description: Working with Project Canopy
thumbnail: "/images/project-canopy-thumb.png"
image: "/images/project-canopy-card.png"
draft: false
weight: 1
---

{{<rawhtml>}}
<div class="hero">
    <h1>Centralizing species data</h1> 
    <h5>Working with Project Canopy</h5>
    {{< img src="/images/project-canopy/PC-Macbook.png" alt="laptop" >}}
    <div class="arrow-down"></div>
</div>
{{</rawhtml>}}

{{<callout raw="true">}}
     <div class="grid grid-cols-5 gap-4 text-center md:text-left">
        <div class="col-span-5 md:col-span-2">
            <h6>Overview</h6>
            <p>Project Canopy's mission is to centralize biodiversity data for the Congo Basin rainforest by providing the analytical tools with which to interpret that data. My goal was to make this knowledge accessible and digestible to donors, governments, and the public at large.</p>
        </div>
        <div class="md:col-span-1 col-span-5">
            <h6>Role</h6>
            <ul class="override">
                <li>UX/UI</li>
                <li>Researcher</li>
                <li>Prototyper</li>
            </ul>
        </div>
        <div class="md:col-span-1 col-span-5">
            <h6>Team</h6>
            <ul class="override">
                <li>1 UX Designer</li>
                <li>4 Data Scientists</li>
                <li>5 Developers</li>
            </ul>
        </div>
        <div class="md:col-span-1 col-span-5">
            <h6>Timeline</h6>
            <p>8 weeks</p>
        </div>
    </div>
{{</callout>}}

{{<rawhtml>}}
<div class="container mx-auto mb-32">
    {{< img src="/images/project-canopy/Final design snapshots.png" >}}
</div>

<div class="container mx-auto mb-32">
    <h3>The Challenges</h3>
    <ul>
    <li>The fact-finding, analytical, and data dissemination processes that drive the formulation of environmental policy in the Congo Basin are fundamentally broken, with far-reaching consequences for the quality and impact of conservation programs. Organizations working on conservation and forestry issues in the Congo Basin face several challenges:</li>
    <li>Finding and analyzing the data they need as part of their day-to-day work is labor- and resource-intensive;</li>
    <li><strong>There’s a total lack of a platform that systematically communicates the fluctuating state of the rainforest to a global audience.
</strong></li>
    </ul>
</div>

<div class="container mx-auto mb-32">
    <h3>The Goal</h3>
    <ul>
        <li>Create a simple,  intuitive dashboard that gathers all the data from the IUCN Red List and the CITES Appendices in one place, making it easily digestible for those who need it.</li>
        <li>Create Species ID Cards that allow governments, local law enforcement, and anti-poaching groups to easily see all the available information about the different species in the Congo Basin. </li>
    </ul>
</div>

<div class="container mx-auto mb-32">
    <h3>The Process</h3>
    <p class="m-0">I started by researching the resources currently available and chatting with the client to better understand their userbase. </p>
    {{< img class="portfolio-image" src="/images/project-canopy/IUCN screenshots.png" >}}
    <p>Starting with the IUCN Red List database, I began gathering screenshots of relevant pages.
       <strong>Given the magnitude of information they’re conveying, IUCN’s Red List UI is remarkably easy to use.</strong> Project Canopy’s primary demographic is already used to using IUCN’s platform, so while creating PC’s dashboard, I chose not to reinvent the wheel.</p>
</div>

{{<callout raw="true">}}
        <h3>Know your users</h3>
        <p>Project Canopy’s userbase is vast: from high-level policy/decision-makers, to campaigners, to local NGO’s. To narrow down the focus of this project, I focused on two types of users:</p>
         <div class="grid grid-cols-1 md:grid-cols-5 gap-4 py-6">
            <div class="grid col-span-2 justify-center content-center">
                {{< img class="portrait" src="/images/project-canopy/Muriel.jpg" alt="Muriel" >}}
            </div>
            <div class="col-span-1 md:col-span-3">
               <p class="pb-2"><strong>Muriel</strong> is a program officer at a large international development organization that has decided to allocate $5m to conservation programs for the Congo Basin rainforest.</p>
                <ul>
                    <li>She wants to ensure that the programs funded will have the greatest impact.</li>
                    <li>To answer the questions of where are the highest concentrations of biodiversity and where that biodiversity is threatened, she has to visit IUCN’s Red List and CITES databases to collate, by hand, species information.</li>
                    <li>Because the data isn’t automatically updated as information changes, the analysis must be re-done every time the organization has a new funding round.</li>
                </ul>
            </div>
        </div>
         <div class="grid grid-cols-1 md:grid-cols-5 gap-4 py-6">
            <div class="md:hidden grid col-span-1 md:col-span-2 justify-center content-center">
                {{< img class="portrait" src="/images/project-canopy/Jules.jpg" alt="Jules" >}}
            </div>
            <div class="col-span-1 md:col-span-3">
                <p class="pb-2"><strong>Jules</strong> works for a conservation NGO in the Central African Republic.</p>
                <ul>
                    <li>He has been tasked with <strong>ensuring that local law enforcement agencies and anti-poaching groups are working with the most up-to-date information</strong> on which species are threatened and whether their trade is internationally regulated.</li>
                    <li>He spends hours combing through the CITES and IUCN databases for the 259 species relevant to his task. <strong>He has to construct the report on each species by hand.</strong></li>
                    <li>Funding is always tight and this task, while valuable, is extremely labor-intensive. He is the first person to do this in several years.</li>
                </ul>
            </div>
            <div class="hidden md:block grid col-span-1 md:col-span-2 justify-center content-center">
                {{< img class="portrait" src="/images/project-canopy/Jules.jpg" alt="Jules" >}}
            </div>
        </div>
        {{</callout>}}

<div class="container mx-auto mb-32">
    <h3>User flows</h3>
    {{< img src="/images/project-canopy/user-flow.png" class="portfolio-image" >}}
    <p>At a basic level, <strong>Project Canopy’s users want to see data about species biodiversity in the Congo Basin rainforest. They need the ability to filter this data by one or multiple countries and view individual species information.</strong></p>
       <p>My first user flow was somehow both oversimplified and too detailed (not sure how I managed that). After several iterations that involved wild amounts of detail, I decided that a scaled-down user flow was best for the timeline and scope of this project. User research validated this decision: <strong>Testers liked that they could accomplish their goals without a lot of bells and whistles.</strong></p>
</div>

<div class="container mx-auto mb-32">
    <h3>Creating the dashboard</h3>
    {{< img src="/images/project-canopy/low-fi.png" class="portfolio-image" >}}
    <p>I spent the low-fidelity stage learning about data visualization and exploring dashboard designs. Utilizing the expertise of my design managers and insight from my peers, I landed on a fixed side navigation.</p>
    
    {{< img src="/images/project-canopy/mid-fi.png" class="portfolio-image" >}}
    <p>Mid-fidelity is where things really started coming together. I experimented with using cards to see an overview for each country. <strong>During design critiques, I received overwhelming feedback that the cards made the dashboard feel chaotic</strong> (I whole-heartedly agree!). At this stage, I transitioned away for excessive text and towards graphs and tables.</p>
    
    {{< img src="/images/project-canopy/hi-fi.png" class="portfolio-image" >}}
    <p>During a design critique, I received the feedback that <strong>my initial color palette did not adequately convey the severity of the information displayed.</strong> So back to the drawing board I went! </p>
    <p>I read more about data visualization and ultimately decided that <strong>pie charts weren’t a useful way to display data.</strong></p>
    
    {{< img src="/images/project-canopy/hi-fi-2.0.png" class="portfolio-image" >}}
    <p>Trying to stay within the client-provided product colors, <strong>I tried my hardest to get around the red/green Christmas vibe. Sadly, it was unavoidable.</strong> I experimented with multiple tints of red, orange and yellow, and ultimately made the primary button color a dark blue. This allowed me to use the red and oranges needed to convey the severity of the data at hand. User testing confirmed the success of this choice.</p>
    
    {{< img src="/images/project-canopy/hi-fi-2.1.png" class="portfolio-image" >}}
</div>

<div class="container mx-auto mb-32">
    <h3>The evolution of the species page</h3>
    {{< img src="/images/project-canopy/species iterations.png" class="portfolio-image" >}}
    <p>The species page provides a simple and informative view of biodiversity in the Congo Basin Rainforest, while <strong>the species ID cards provide more detailed information and can be shared, downloaded, and printed for use by local authorities.</strong></p>
    
    {{< img src="/images/project-canopy/Card iterations.png" class="portfolio-image" >}}
    <p>Out of the whole project, I had the most fun designing the species cards. They’re like baseball cards, but for animals! <strong>My goal was to keep them visually simple while still conveying the most important information.</strong></p>
</div>

<div class="container mx-auto mb-32">
    <h3 class="mb-6">Design system</h3>
    <h5>Color palette</h5>
     <div class="grid grid-cols-1 md:grid-cols-5 gap-4 py-6">
        <div class="col-span-2">
            <p>Project Canopy’s original colors were very warm, so with the blessing of the clients, I adjusted the tone to cooler variations. <strong>I wanted to keep the same earthy vibe, but elevate it to feel more modern and sophisticated.</strong></p>
        </div>
        <div class="grid col-span-3 justify-center content-center">
            {{< img src="/images/project-canopy/product-colors.png" alt="Color palette" >}}
        </div>
    </div>
     <div class="grid grid-cols-1 md:grid-cols-5 gap-4 py-6">
    
        <div class="grid col-span-3 justify-center content-center">
            {{< img src="/images/project-canopy/Primary colors.png" alt="Color palette" >}}
        </div>
        <div class="col-span-2">
        <p>In the same tone as the product colors, the darker blue pairs nicely with the threat indication red and oranges while avoiding a Christmas vibe.</p>
        </div>
        
    </div>
</div>

<div class="container mx-auto mb-32">
    <h5>Typeface</h5>
     <div class="grid grid-cols-1 md:grid-cols-5 gap-4 py-6">
        <div class="col-span-2">
            <p>I experimented with Heebo, Open Sans, and PT Sans before landing on IBM Plex Sans.</p>
            <p>As soon as I saw it, I knew it was the obvious choice for Project Canopy’s typeface. <strong>It’s clean and professional while still approachable.</strong> It conveys the seriousness of the information without being intimidating.</p>
        </div>
        <div class="grid col-span-3 justify-center content-center">
            {{< img src="/images/project-canopy/Typeface.png" alt="typeface (IBM Plex Sans)" >}}
        </div>
    </div>
</div>

<div class="container mx-auto mb-32">
    <h5>Branding</h5>
     <div class="py-6">
        <p>The inspiration behind Project Canopy’s logo was “a tree, but pixelated.”
               Working with the logo and branding provided by the client, I updated the colors and adjusted the layout to be more versatile.</p>
    </div>
    {{< img src="/images/project-canopy/new-logo.png" alt="final logo" >}}
</div>

<div class="container mx-auto mb-32">
    <h3>Final designs</h3>
     <div class="py-6">
        {{< img src="/images/project-canopy/final-dashboard.png" alt="final dashboard" >}}
    </div>
     <div class="py-6">
        {{< img src="/images/project-canopy/final-species-card.png" alt="final species cards" >}}
    </div>
</div>

{{<callout>}}
A large portion of Project Canopy’s userbase speaks French, so **I created all key screens in French and English.**
{{</callout>}}

<div class="container mx-auto mb-32">
{{< img class="portfolio-image" src="/images/project-canopy/French designs.png" alt="localized dashboard" >}}
</div>
{{</rawhtml>}}

{{<callout>}}
### Key takeaways
At the beginning of this project, I knew very little about biodiversity in the Congo Basin rainforest or about displaying data, but I was (and still am) thrilled to have the opportunity to work on something so meaningful and important. I read countless articles, asked a constant stream of questions, and did what felt like 7 million iterations. <strong>At the end of 8 weeks, I had not only existed far outside of my comfort zone, but I also helped build something of which I am immensely proud.</strong> These are some of the things I learned along the way:

**Data visualization is hard!**
- The desire to design complicated, visually interesting charts and graphs is so strong, but as with many things, less is often more
- Just because every dashboard on Dribbble is fancy, doesn’t mean that fancy is best
- Tables are underrated. Especially when displaying text-heavy data
- When all else fails, remember to KISS (Keep It Simple, Stupid)
**Being your own team is more challenging than expected**
- Having the ability to brainstorm and work with another designer makes everything easier and more enjoyable

**English is a very condensed language**
- When designing for a multi-lingual platform, make sure you allow extra room for text

{{</callout>}}
