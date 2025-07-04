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

  import { AlignJustifyOutline } from "flowbite-svelte-icons";

  // Function to handle menu button click in table header
  function handleMenuClick() {
    console.log("Menu button clicked");
  }
  
  let criterion1 = ''; // Default value for the first criterion
  let criterion2 = ''; // Default value for the second criterion
  let criterion3 = ''; // Default value for the third criterion
  let profile_description = ''; // Default value for the profile description
  let tone_of_voice = ''; // Default value for the tone of voice
  let stepValue = 150; // Default step value for the range input

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
            <Label
              for="profile_name"
              class="mb-2">
              Profile Name
            </Label>

            <Input type="text" id="first_name" placeholder="Name" required class="mb-6"/>

            <Label
              for="profile_description"
              class="mb-2">
              Profile Description
            </Label>

            <Textarea
              id="profile_description"
              class="mb-6"
              placeholder="Optional profile description and purpose …"
              bind:value={profile_description} rows={3}
            />

            <Label
              for="tone_of_voice"
              class="mb-2">
              Tone of Voice
            </Label>

            <Select
              id="tone_of_voice"
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              placeholder="Select tone of voice"
              bind:value={tone_of_voice}
            >
              <option value="professional_supportive">Professional / Supportive</option>
              <option value="empowering_activist">Empowering / Activist</option>
              <option value="community_caring">Community & Caring</option>
            </Select>

              <Label class="mb-2 mt-8">Summary Text Length (max 400)</Label>
              <Range id="range-steps" min="0" max="400" bind:value={stepValue} step="10" />
              <p class="mt-2">Value: {stepValue}</p>

          </div>

          <div>

            <!-- EVALUATION CRITERIA -->

            <label
              for="criteria"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Evaluation Criteria for Sources
            </label>
            
              <Select
                id="criteria"
                class="mb-6"
                placeholder="Select evaluation criteria"
                bind:value={criterion1}
              >
                <option value="articleQuality">Article Quality</option>
                <option value="genderSenseAlignment">GenderSense Alignment</option>
                <option value="warm">Empowering & Positive</option>
                <option value="currentUpToDate">Current & up to date</option>
              </Select>
              
              <Select
                id="criteria"
                class="mb-6"
                placeholder="Select evaluation criteria"
                bind:value={criterion2}
              >
                <option value="articleQuality">Article Quality</option>
                <option value="genderSenseAlignment">GenderSense Alignment</option>
                <option value="warm">Empowering & Positive</option>
                <option value="currentUpToDate">Current & up to date</option>
              </Select>

              <Select
                id="criteria"
                class="mb-6"
                placeholder="Select evaluation criteria"
                bind:value={criterion3}
              >
                <option value="articleQuality">Article Quality</option>
                <option value="genderSenseAlignment">GenderSense Alignment</option>
                <option value="warm">Empowering & Positive</option>
                <option value="currentUpToDate">Current & up to date</option>
              </Select>

              <!-- CATEGORY TAGS -->

              <h5 class="mt-8 mb-2 text-sm">Available Category Tags (e.g. newsletter sections)</h5>
              <Card class="p-4 sm:p-6 md:p-8 min-w-full">
                        
              <Checkbox class="" aria-describedby="helper-checkbox-text">In the News</Checkbox>
              <Helper id="helper-checkbox-text" class="ps-7 mb-4">News items of general Trans+ interest</Helper>

              <Checkbox aria-describedby="helper-checkbox-text">Trans+ Health</Checkbox>
              <Helper id="helper-checkbox-text" class="ps-7 mb-4">Trans+ health tips and info</Helper>

              <Checkbox aria-describedby="helper-checkbox-text">GenderSense Latest</Checkbox>
              <Helper id="helper-checkbox-text" class="ps-7 mb-4">Updates on what is going on at GenderSense</Helper>

              <Checkbox aria-describedby="helper-checkbox-text">Transition Coaching Tips</Checkbox>
              <Helper id="helper-checkbox-text" class="ps-7 mb-4">Hints and tips on making life easier</Helper>

              <Checkbox aria-describedby="helper-checkbox-text">GenderSense Community Highlights</Checkbox>
              <Helper id="helper-checkbox-text" class="ps-7 mb-4">Items from the GenderSense online community</Helper>

              <Checkbox aria-describedby="helper-checkbox-text">Trans+ Issues & Rights Updates</Checkbox>
              <Helper id="helper-checkbox-text" class="ps-7 mb-4">Community issues</Helper>

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

          <Table shadow>
            <TableHead>
              <TableHeadCell>Source Name</TableHeadCell>
              <TableHeadCell>RSS Feed URL</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>
                <button
                  type="button"
                  on:click={handleMenuClick}
                  class="pr-0 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <AlignJustifyOutline class="w-5 h-5" />
                </button>
              </TableHeadCell>
            </TableHead>
          <TableBody>
            <TableBodyRow>
              <TableBodyCell>Pink News</TableBodyCell>
              <TableBodyCell>https://www.thepinknews.com/feed/</TableBodyCell>
              <TableBodyCell><Badge color="green">Active</Badge></TableBodyCell>
              <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Queer AF</TableBodyCell>
              <TableBodyCell>https://www.wearequeeraf.com/rss/</TableBodyCell>
              <TableBodyCell><Badge color="green">Active</Badge></TableBodyCell>
              <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>ASD News</TableBodyCell>
              <TableBodyCell>https://medicalxpress.com/rss-feed/breaking/autism-spectrum-news/</TableBodyCell>
              <TableBodyCell><Badge color="red">Paused</Badge></TableBodyCell>
              <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Trans Lifeline Blog</TableBodyCell>
              <TableBodyCell>https://translifeline.org/blog/</TableBodyCell>
              <TableBodyCell><Badge color="green">Active</Badge></TableBodyCell>
              <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>LGBTQ Nation</TableBodyCell>
              <TableBodyCell>https://www.lgbtqnation.com/feed/</TableBodyCell>
              <TableBodyCell><Badge color="red">Paused</Badge></TableBodyCell>
              <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>The Trans Advocate</TableBodyCell>
              <TableBodyCell>https://www.transadvocate.com/feed</TableBodyCell>
              <TableBodyCell><Badge color="green">Active</Badge></TableBodyCell>
              <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>

        </div>

        <!-- BUTTONS -->
        <div class="flex justify-end mt-6">
          <form class="space-x-3">
            <Button color="alternative">Cancel</Button>
            <Button color="green">Save Profile</Button>
          </form>
         </div>
        
<!-- -->

      </div>

    </div>

  </div>

</div>
