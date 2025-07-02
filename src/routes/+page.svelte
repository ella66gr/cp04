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
    Breadcrumb,
    BreadcrumbItem
  } from 'flowbite-svelte';
  
  let criterion1 = '';
  let criterion2 = '';
  let criterion3 = '';
  let criterion4 = ''; 
  let profile_description = '';
  let tone_of_voice = '';

</script>

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

      <!-- Main input fields  -->

      <form>
        <div class="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <Label for="profile_name" class="mb-2">Profile Name</Label>
            <Input type="text" id="first_name" placeholder="Name" required class="mb-4"/>
            <Label for="profile_description" class="mb-2">Profile Description</Label>
            <Textarea class="mb-4" label="Description" placeholder="Optional profile description …" bind:value={profile_description} rows={3} />
            <Label for="criterion1" class="mb-2">Tone of Voice</Label>
              <Select class="mb-4" label="Tone of Voice" placeholder="Select tone of voice" bind:value={tone_of_voice}>
                <option value="professional_supportive">Professional / Supportive</option>
                <option value="empowering_activist">Empowering / Activist</option>
                <option value="community_caring">Community & Caring</option>
              </Select>
          </div>

          <div>
            <Label for="criterion1" class="mb-2">Evaluation Criteria for Sources</Label>
              <Select class="mb-4 text-red-600" label="Evaluation Criteria" placeholder="Select evaluation criteria" bind:value={criterion1}>
                <option value="articleQuality">Article Quality</option>
                <option value="genderSenseAlignment">GenderSense Alignment</option>
                <option value="warm">Empowering & Positive</option>
                <option value="currentUpToDate">Current & up to date</option>
              </Select>
  
              <Select  class="mb-4" label="Evaluation Criteria" placeholder="Select evaluation criteria" bind:value={criterion2}>
                <option value="articleQuality">Article Quality</option>
                <option value="genderSenseAlignment">GenderSense Alignment</option>
                <option value="warm">Empowering & Positive</option>
                <option value="currentUpToDate">Current & up to date</option>
              </Select>

              <Select  class="mb-4" label="Evaluation Criteria"  placeholder="Select evaluation criteria" bind:value={criterion3}>
                <option value="articleQuality">Article Quality</option>
                <option value="genderSenseAlignment">GenderSense Alignment</option>
                <option value="warm">Empowering & Positive</option>
                <option value="currentUpToDate">Current & up to date</option>
              </Select>
          </div>

          <div>
            <Label for="description" class="mb-2">Description</Label>
            <Input type="text" id="company" placeholder="Flowbite" required />
          </div>
          <div>
            <Label for="phone" class="mb-2">Phone number</Label>
            <Input type="tel" id="phone" placeholder="123-45-678" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />
          </div>
          <div>
            <Label for="website" class="mb-2">Website URL</Label>
            <Input type="url" id="website" placeholder="flowbite.com" required />
          </div>
          <div>
            <Label for="visitors" class="mb-2">Unique visitors (per month)</Label>
            <Input type="number" id="visitors" placeholder="" required />
          </div>
        </div>
        <div class="mb-6">
          <Label for="email" class="mb-2">Email address</Label>
          <Input type="email" id="email" placeholder="john.doe@company.com" required />
        </div>
        <div class="mb-6">
          <Label for="password" class="mb-2">Password</Label>
          <Input type="password" id="password" placeholder="•••••••••" required />
        </div>
        <div class="mb-6">
          <Label for="confirm_password" class="mb-2">Confirm password</Label>
          <Input type="password" id="confirm_password" placeholder="•••••••••" required />
        </div>
        <Checkbox divClass="mb-6 gap-1 rtl:space-x-reverse" required>
          I agree with the <A href="/" class="text-primary-700 dark:text-primary-600 hover:underline">terms and conditions</A>.
        </Checkbox>
        <Button type="submit">Submit</Button>
      </form>

      <!-- Grid section -->
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

      <div>
        <Card class="p-4 sm:p-6 md:p-8">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CARD 6. Noteworthy technology acquisitions 2021</h5>
          <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </Card>
      </div>

    </div>

  </div>
</div>
