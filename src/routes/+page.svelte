<!-- src/routes/components/+page.svelte -->

<script lang="ts">
  import { 
    Button,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    Card,
    Input,
    Textarea,
    InputAddon,
    Label,
    Helper,
    Checkbox,
    A,
    Select,
    Badge, 
    Range
  } from 'flowbite-svelte';

  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from "flowbite-svelte";

  import { AlignJustifyOutline, ChevronDownOutline } from "flowbite-svelte-icons";

  // Form variables
  let criterion1 = '';
  let criterion2 = '';
  let criterion3 = '';
  let profile_description = '';
  let tone_of_voice = '';
  let stepValue = 150;

  // RSS Feed data with selection state
  let rssFeeds = [
    { id: 1, name: "Pink News", url: "https://www.thepinknews.com/feed/", status: "active", selected: false },
    { id: 2, name: "Queer AF", url: "https://www.wearequeeraf.com/rss/", status: "active", selected: false },
    { id: 3, name: "ASD News", url: "https://medicalxpress.com/rss-feed/breaking/autism-spectrum-news/", status: "paused", selected: false },
    { id: 4, name: "Trans Lifeline Blog", url: "https://translifeline.org/blog/", status: "active", selected: false },
    { id: 5, name: "LGBTQ Nation", url: "https://www.lgbtqnation.com/feed/", status: "paused", selected: false },
    { id: 6, name: "The Trans Advocate", url: "https://www.transadvocate.com/feed", status: "active", selected: false }
  ];

  // Reactive statement to get selected feeds
  $: selectedFeeds = rssFeeds.filter(feed => feed.selected);
  $: hasSelectedFeeds = selectedFeeds.length > 0;
  $: allSelected = rssFeeds.length > 0 && rssFeeds.every(feed => feed.selected);

  // Functions for dropdown actions
  function toggleSelectedFeeds() {
    rssFeeds = rssFeeds.map(feed => {
      if (feed.selected) {
        return {
          ...feed,
          status: feed.status === 'active' ? 'paused' : 'active'
        };
      }
      return feed;
    });
    console.log('Toggled status for selected feeds:', selectedFeeds.map(f => f.name));
  }

  function deleteSelectedFeeds() {
    if (confirm(`Are you sure you want to delete ${selectedFeeds.length} selected feed(s)?`)) {
      rssFeeds = rssFeeds.filter(feed => !feed.selected);
      console.log('Deleted selected feeds');
    }
  }

  // Toggle all checkboxes - using DOM onclick like your button examples
  const handleSelectAll = () => {
    const shouldSelectAll = !allSelected;
    rssFeeds = rssFeeds.map(feed => ({
      ...feed,
      selected: shouldSelectAll
    }));
    console.log('Select all toggled:', shouldSelectAll);
  };

</script>

<!-- Page title -->
<svelte:head>
    <title>CP04 Profile Editor</title>
</svelte:head>

<!-- MAIN CONTAINER -->
<div class="min-h-screen bg-green-100 dark:bg-gray-900">

  <!-- HEADER SECTION - Full width -->
  <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">

      <!-- Top panel -->
      <div class="text-center mt-6">
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          <span class="text-gray-500">CP04</span> Profile Editor
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Ella's Marketing Content Instruction Profile (MCIP).
        </p>
      </div>
   
    </div>
  </div>

  <!-- BODY SECTION -->
  <!-- MAIN PANEL - Full width -->
  <div class="bg-white dark:bg-gray-800 border-l border-r border-b border-gray-200 dark:border-gray-700 mt-0">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <!-- Top section input fields  -->
      <form>
        <div class="mb-6 grid gap-8 md:grid-cols-2">
          <div>
            <Label for="profile_name" class="mb-2">Profile Name</Label>
            <Input type="text" id="profile_name" placeholder="Name" required class="mb-6"/>

            <Label for="profile_description" class="mb-2">Profile Description</Label>
            <Textarea
              id="profile_description"
              class="mb-6"
              placeholder="Optional profile description and purpose …"
              bind:value={profile_description} 
              rows={3}
            />

            <Label for="tone_of_voice" class="mb-2">Tone of Voice</Label>
            <Select
              id="tone_of_voice"
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              placeholder="Select tone of voice"
              bind:value={tone_of_voice}
            >
              <option value="">Select tone of voice</option>
              <option value="professional_supportive">Professional / Supportive</option>
              <option value="empowering_activist">Empowering / Activist</option>
              <option value="community_caring">Community & Caring</option>
            </Select>

            <Label for="range-steps" class="mb-2 mt-8">Summary Text Length (max 400)</Label>
            <Range id="range-steps" min="0" max="400" bind:value={stepValue} step="10" />
            <p class="mt-2">Value: {stepValue}</p>

          </div>

          <div>
            <!-- EVALUATION CRITERIA -->
            <Label for="criterion1" class="block mb-2">Evaluation Criteria for Sources</Label>
            
            <Select id="criterion1" class="mb-6" placeholder="Select evaluation criteria" bind:value={criterion1}>
              <option value="">Select evaluation criteria</option>
              <option value="articleQuality">Article Quality</option>
              <option value="genderSenseAlignment">GenderSense Alignment</option>
              <option value="warm">Empowering & Positive</option>
              <option value="currentUpToDate">Current & up to date</option>
            </Select>
              
            <Label for="criterion2" class="block mb-2">Second Evaluation Criteria</Label>
            <Select id="criterion2" class="mb-6" placeholder="Select evaluation criteria" bind:value={criterion2}>
              <option value="">Select evaluation criteria</option>
              <option value="articleQuality">Article Quality</option>
              <option value="genderSenseAlignment">GenderSense Alignment</option>
              <option value="warm">Empowering & Positive</option>
              <option value="currentUpToDate">Current & up to date</option>
            </Select>

            <Label for="criterion3" class="block mb-2">Third Evaluation Criteria</Label>
            <Select id="criterion3" class="mb-6" placeholder="Select evaluation criteria" bind:value={criterion3}>
              <option value="">Select evaluation criteria</option>
              <option value="articleQuality">Article Quality</option>
              <option value="genderSenseAlignment">GenderSense Alignment</option>
              <option value="warm">Empowering & Positive</option>
              <option value="currentUpToDate">Current & up to date</option>
            </Select>

            <!-- CATEGORY TAGS -->
            <h5 class="mt-8 mb-2 text-sm">Available Category Tags (e.g. newsletter sections)</h5>
            <Card class="p-4 sm:p-6 md:p-8 min-w-full">
                        
              <Checkbox aria-describedby="news-helper">In the News</Checkbox>
              <Helper id="news-helper" class="ps-7 mb-4">News items of general Trans+ interest</Helper>

              <Checkbox aria-describedby="health-helper">Trans+ Health</Checkbox>
              <Helper id="health-helper" class="ps-7 mb-4">Trans+ health tips and info</Helper>

              <Checkbox aria-describedby="latest-helper">GenderSense Latest</Checkbox>
              <Helper id="latest-helper" class="ps-7 mb-4">Updates on what is going on at GenderSense</Helper>

              <Checkbox aria-describedby="coaching-helper">Transition Coaching Tips</Checkbox>
              <Helper id="coaching-helper" class="ps-7 mb-4">Hints and tips on making life easier</Helper>

              <Checkbox aria-describedby="community-helper">GenderSense Community Highlights</Checkbox>
              <Helper id="community-helper" class="ps-7 mb-4">Items from the GenderSense online community</Helper>

              <Checkbox aria-describedby="rights-helper">Trans+ Issues & Rights Updates</Checkbox>
              <Helper id="rights-helper" class="ps-7 mb-4">Community issues</Helper>

            </Card>

          </div>

        </div>

      </form>

      <!-- FORM SECTION WITH RSS FEEDS -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-4">RSS Feeds</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">Add RSS feeds to be used for content generation.</p>

        <form>
          <div class="mb-4">
            <Label for="rss_feed" class="block mb-2">RSS Feed URL</Label>
            <Input type="url" id="rss_feed" placeholder="https://example.com/rss" required class="w-full mb-4"/>
          </div>
          <Button color="primary">Add New Source</Button>
        </form>

        <!-- FEED DISPLAY TABLE -->
        <div class="mt-8 overflow-x-auto">
          
          <!-- Selection Info Bar -->
          {#if hasSelectedFeeds}
            <div class="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <span class="text-sm text-blue-800 dark:text-blue-200">
                {selectedFeeds.length} feed{selectedFeeds.length !== 1 ? 's' : ''} selected
              </span>
            </div>
          {/if}

          <Table shadow>
            <TableHead>
              <TableHeadCell>Source Name</TableHeadCell>
              <TableHeadCell>RSS Feed URL</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>
                <div class="flex items-center gap-2">
                  <!-- Select All Checkbox -->
                  <Checkbox 
                    checked={allSelected}
                    onclick={handleSelectAll}
                    title="Select All"
                  />
                  
                  <!-- Actions Dropdown -->
                  <div class="relative">
                    <Button 
                      color="light" 
                      class="!p-2"
                      disabled={!hasSelectedFeeds}
                      id="dropdown-button"
                    >
                      <AlignJustifyOutline class="w-4 h-4" />
                      <ChevronDownOutline class="w-3 h-3 ml-1" />
                    </Button>
                    
                    <Dropdown triggeredBy="#dropdown-button" class="w-48">
                      <DropdownItem 
                        on:click={toggleSelectedFeeds}
                        disabled={!hasSelectedFeeds}
                        class="flex items-center gap-2"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                        </svg>
                        Toggle Active/Pause
                      </DropdownItem>
                      <DropdownItem 
                        on:click={deleteSelectedFeeds}
                        disabled={!hasSelectedFeeds}
                        class="flex items-center gap-2 text-red-600 dark:text-red-400"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                        Delete Selected
                      </DropdownItem>
                    </Dropdown>
                  </div>
                </div>
              </TableHeadCell>
            </TableHead>
            
            <TableBody>
              {#each rssFeeds as feed (feed.id)}
                <TableBodyRow>
                  <TableBodyCell>{feed.name}</TableBodyCell>
                  <TableBodyCell class="font-mono text-sm">{feed.url}</TableBodyCell>
                  <TableBodyCell>
                    <Badge color={feed.status === 'active' ? 'green' : 'red'}>
                      {feed.status === 'active' ? 'Active' : 'Paused'}
                    </Badge>
                  </TableBodyCell>
                  <TableBodyCell>
                    <Checkbox bind:checked={feed.selected} />
                  </TableBodyCell>
                </TableBodyRow>
              {/each}
            </TableBody>
          </Table>

        </div>

        <!-- BUTTONS -->
        <div class="flex justify-end mt-6">
          <div class="space-x-3">
            <Button color="alternative">Cancel</Button>
            <Button color="green">Save Profile</Button>
          </div>
        </div>

      </div>

    </div>

  </div>

</div>