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
  
  let criterion1 = ''; // Default value for the first criterion
  let criterion2 = ''; // Default value for the second criterion
  let criterion3 = ''; // Default value for the third criterion
  let profile_description = ''; // Default value for the profile description
  let tone_of_voice = ''; // Default value for the tone of voice
  let stepValue = 150; // Default step value for the range input

</script>

<svelte:head>
    <title>CP04 Profile Editor</title> <!-- Page title --> 
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
            <Input type="text" id="first_name" placeholder="Name" required class="mb-6"/>
            <Label for="profile_description" class="mb-2">Profile Description</Label>
            <Textarea class="mb-6" label="Description" placeholder="Optional profile description and purpose …" bind:value={profile_description} rows={3} />
            <Label for="criterion1" class="mb-2">Tone of Voice</Label>
              <Select class="mb-6" label="Tone of Voice" placeholder="Select tone of voice" bind:value={tone_of_voice}>
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

            <Label for="criterion1" class="mb-2">Evaluation Criteria for Sources</Label>
              <Select class="mb-6 text-red-600" label="Evaluation Criteria" placeholder="Select evaluation criteria" bind:value={criterion1}>
                <option value="articleQuality">Article Quality</option>
                <option value="genderSenseAlignment">GenderSense Alignment</option>
                <option value="warm">Empowering & Positive</option>
                <option value="currentUpToDate">Current & up to date</option>
              </Select>
  
              <Select  class="mb-6" label="Evaluation Criteria" placeholder="Select evaluation criteria" bind:value={criterion2}>
                <option value="articleQuality">Article Quality</option>
                <option value="genderSenseAlignment">GenderSense Alignment</option>
                <option value="warm">Empowering & Positive</option>
                <option value="currentUpToDate">Current & up to date</option>
              </Select>

              <Select  class="mb-6" label="Evaluation Criteria"  placeholder="Select evaluation criteria" bind:value={criterion3}>
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

      <!-- Bottom grid section -->

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <div>
          <Card class="p-4 sm:p-6 md:p-8 min-w-full">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CARD 1. Noteworthy technology acquisitions 2021</h5>
          <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </Card>



        </div>

        <div>
          <Card class="p-4 sm:p-6 md:p-8 min-w-full">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CARD 2. Noteworthy technology acquisitions 2021</h5>
          <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </Card>

        </div>

        <div>
          <Card class="p-4 sm:p-6 md:p-8 min-w-full">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CARD 3. Noteworthy technology acquisitions 2021</h5>
          <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </Card>
        </div>

        <div>
          <Card class="p-4 sm:p-6 md:p-8 min-w-full">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CARD 4. Noteworthy technology acquisitions 2021</h5>
          <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </Card>
        </div>

        <div>
          <Card class="rounded-none shadow-none min-w-full">
          <h5>CARD 4A. Noteworthy technology acquisitions 2021</h5>
          <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </Card>
        </div>

      </div>
      <!-- End of Grid Section -->

      <!-- Card -->
      <div class="py-6 px-0">
        <Card class="p-4 sm:p-6 md:p-8">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CARD 5. Noteworthy technology acquisitions 2021</h5>
        <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </Card>
      </div>



    </div>

  </div>
</div>
