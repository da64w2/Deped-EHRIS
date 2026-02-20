<template>
  <div class="my-details">
    <!-- Tabs (design.png: horizontal, active = blue underline) -->
    <div class="tabs-wrap">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="tab-btn"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Official Info (tbl_emp_official_info) -->
    <template v-if="activeTab === 'official'">
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Official Information</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body section-grid">
          <div class="info-row"><span class="info-label">HR ID</span><span class="info-value">{{ officialInfo.hrid }}</span></div>
          <div class="info-row"><span class="info-label">Employee No</span><span class="info-value">{{ officialInfo.employee_id }}</span></div>
          <div class="info-row"><span class="info-label">Item No</span><span class="info-value">{{ officialInfo.item_no }}</span></div>
          <div class="info-row"><span class="info-label">Name</span><span class="info-value">{{ officialInfo.prefix_name }} {{ officialInfo.firstname }} {{ officialInfo.middlename }} {{ officialInfo.lastname }} {{ officialInfo.extension }}</span></div>
          <div class="info-row"><span class="info-label">Job Title</span><span class="info-value">{{ officialInfo.job_title }}</span></div>
          <div class="info-row"><span class="info-label">Department ID</span><span class="info-value">{{ officialInfo.department_id }}</span></div>
          <div class="info-row"><span class="info-label">Office</span><span class="info-value">{{ officialInfo.office }}</span></div>
          <div class="info-row"><span class="info-label">Employment Status</span><span class="info-value">{{ officialInfo.employ_status }}</span></div>
          <div class="info-row"><span class="info-label">Mode of Employment</span><span class="info-value">{{ officialInfo.mode_of_employement }}</span></div>
          <div class="info-row"><span class="info-label">Date of Joining</span><span class="info-value">{{ officialInfo.date_of_joining }}</span></div>
          <div class="info-row"><span class="info-label">Date of Promotion</span><span class="info-value">{{ officialInfo.date_of_promotion }}</span></div>
          <div class="info-row"><span class="info-label">Reporting Manager</span><span class="info-value">{{ officialInfo.reporting_manager }}</span></div>
          <div class="info-row"><span class="info-label">Salary Grade</span><span class="info-value">{{ officialInfo.salary_grade }}</span></div>
          <div class="info-row"><span class="info-label">Salary Step</span><span class="info-value">{{ officialInfo.salary_step }}</span></div>
          <div class="info-row"><span class="info-label">Salary Annual</span><span class="info-value">{{ officialInfo.salary_annual }}</span></div>
          <div class="info-row"><span class="info-label">Civil Service</span><span class="info-value">{{ officialInfo.civil_service }}</span></div>
          <div class="info-row"><span class="info-label">Leave Balance</span><span class="info-value">{{ officialInfo.leave_balance }}</span></div>
          <div class="info-row"><span class="info-label">Vacation Leave Balance</span><span class="info-value">{{ officialInfo.vacation_leave_balanced }}</span></div>
        </div>
      </div>
    </template>

    <!-- Personal info: card-based layout (design.png) -->
    <template v-else-if="activeTab === 'personal'">
      <!-- Basic information card - landscape: single row -->
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Basic information</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body basic-info-landscape">
          <div class="block basic-photo-cell">
            <div class="basic-photo">G</div>
          </div>
          <div class="block-divider" aria-hidden="true"></div>
          <div class="block basic-contact-cell">
            <div class="basic-name">{{ employee.employeeName }}</div>
            <div class="basic-id">{{ employee.hrId }}</div>
            <div class="basic-meta-row">
              <span class="meta-item">♂ Male</span>
              <span class="meta-item">✉ <a :href="`mailto:${employee.email}`" class="email-link">{{ employee.email }}</a></span>
              <span class="meta-item">📞 {{ employee.contactNo }}</span>
            </div>
          </div>
          <div class="block-divider" aria-hidden="true"></div>
          <div class="block basic-demographics-cell">
            <div class="demographics-grid">
              <div class="demographic-item">
                <span class="info-label">Place of birth</span>
                <span class="info-value">{{ employee.placeOfBirth }}</span>
              </div>
              <div class="demographic-item">
                <span class="info-label">Birth date</span>
                <span class="info-value">{{ employee.birthDate }}</span>
              </div>
              <div class="demographic-item">
                <span class="info-label">Blood type</span>
                <span class="info-value">{{ employee.bloodType }}</span>
              </div>
              <div class="demographic-item">
                <span class="info-label">Marital Status</span>
                <span class="info-value">{{ employee.maritalStatus }}</span>
              </div>
              <div class="demographic-item">
                <span class="info-label">Religion</span>
                <span class="info-value">{{ employee.religion }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal Info / Government IDs (tbl_emp_personal_info) -->
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Government IDs &amp; Other Personal</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body section-grid">
          <div class="info-row"><span class="info-label">Age</span><span class="info-value">{{ personalInfo.age }}</span></div>
          <div class="info-row"><span class="info-label">Gender</span><span class="info-value">{{ personalInfo.gender }}</span></div>
          <div class="info-row"><span class="info-label">Citizenship</span><span class="info-value">{{ personalInfo.citizenship }}</span></div>
          <div class="info-row"><span class="info-label">Dual Citizenship</span><span class="info-value">{{ personalInfo.dual_citizenship }}</span></div>
          <div class="info-row"><span class="info-label">Country</span><span class="info-value">{{ personalInfo.country }}</span></div>
          <div class="info-row"><span class="info-label">Height</span><span class="info-value">{{ personalInfo.height }}</span></div>
          <div class="info-row"><span class="info-label">Weight</span><span class="info-value">{{ personalInfo.weight }}</span></div>
          <div class="info-row"><span class="info-label">PRC No</span><span class="info-value">{{ personalInfo.prc_no }}</span></div>
          <div class="info-row"><span class="info-label">TIN</span><span class="info-value">{{ personalInfo.tin }}</span></div>
          <div class="info-row"><span class="info-label">SSS</span><span class="info-value">{{ personalInfo.sss }}</span></div>
          <div class="info-row"><span class="info-label">GSIS BP</span><span class="info-value">{{ personalInfo.gsis_bp }}</span></div>
          <div class="info-row"><span class="info-label">PhilHealth</span><span class="info-value">{{ personalInfo.philhealth }}</span></div>
          <div class="info-row"><span class="info-label">Pag-IBIG</span><span class="info-value">{{ personalInfo.pag_ibig }}</span></div>
          <div class="info-row"><span class="info-label">GSIS</span><span class="info-value">{{ personalInfo.gsis }}</span></div>
          <div class="info-row"><span class="info-label">Agency Employee No</span><span class="info-value">{{ personalInfo.agency_emp_num }}</span></div>
        </div>
      </div>

      <!-- Address card - landscape: two columns side by side -->
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Address</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body address-landscape">
          <div class="address-row">
            <div class="block address-col">
              <span class="info-label">Citizen ID address</span>
              <span class="info-value">{{ employee.citizenIdAddress }}</span>
            </div>
            <div class="block-divider block-divider-vertical" aria-hidden="true"></div>
            <div class="block address-col">
              <span class="info-label">Residential address</span>
              <span class="info-value">{{ employee.residentialAddress }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Education card (list format) -->
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Education</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body">
          <ul class="education-list" v-if="educationList.length">
            <li v-for="(edu, i) in educationList" :key="i" class="education-item block">
              <strong>{{ edu.level }} - {{ edu.school }}</strong>
              <span>{{ edu.course }}</span>
              <span>GPA ({{ edu.gpa }})</span>
              <span>{{ edu.fromYear }} - {{ edu.toYear }}</span>
            </li>
          </ul>
          <p v-else class="no-data-text">No education entries yet.</p>
        </div>
      </div>

      <!-- Emergency contact card - landscape: one row -->
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Emergency contact</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body emergency-landscape">
          <div class="block emergency-item">
            <span class="info-label">Name</span>
            <span class="info-value">{{ employee.emergencyName }}</span>
          </div>
          <div class="block-divider block-divider-vertical" aria-hidden="true"></div>
          <div class="block emergency-item">
            <span class="info-label">Relationship</span>
            <span class="info-value">{{ employee.emergencyRelationship }}</span>
          </div>
          <div class="block-divider block-divider-vertical" aria-hidden="true"></div>
          <div class="block emergency-item">
            <span class="info-label">Phone number</span>
            <span class="info-value">{{ employee.emergencyPhone }}</span>
          </div>
        </div>
      </div>

      <!-- Family card (table) -->
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Family</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body">
          <table class="family-table">
            <thead>
              <tr>
                <th>Family type</th>
                <th>Person name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in familyRows" :key="i">
                <td>{{ row.type }}</td>
                <td>{{ row.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>

    <!-- Contact Info (tbl_emp_contact_info) -->
    <template v-else-if="activeTab === 'contact'">
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Contact Information</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body section-grid">
          <div class="info-row"><span class="info-label">Email</span><span class="info-value"><a :href="`mailto:${contactInfo.email}`" class="email-link">{{ contactInfo.email }}</a></span></div>
          <div class="info-row"><span class="info-label">Phone No</span><span class="info-value">{{ contactInfo.phone_num }}</span></div>
          <div class="info-row"><span class="info-label">Mobile No</span><span class="info-value">{{ contactInfo.mobile_num }}</span></div>
          <div class="info-row block"><span class="info-label">House/Block/Lot</span><span class="info-value">{{ contactInfo.house_block_lotnum }}</span></div>
          <div class="info-row block"><span class="info-label">Street Address</span><span class="info-value">{{ contactInfo.street_add }}</span></div>
          <div class="info-row block"><span class="info-label">Subdivision/Village</span><span class="info-value">{{ contactInfo.subdivision_village }}</span></div>
          <div class="info-row"><span class="info-label">Zip Code</span><span class="info-value">{{ contactInfo.zip_code }}</span></div>
          <div class="info-row block"><span class="info-label">Residential (House/Block/Lot)</span><span class="info-value">{{ contactInfo.house_block_lotnum1 }}</span></div>
          <div class="info-row block"><span class="info-label">Residential (Street)</span><span class="info-value">{{ contactInfo.street_add1 }}</span></div>
          <div class="info-row"><span class="info-label">Emergency Name</span><span class="info-value">{{ contactInfo.emergency_name }}</span></div>
          <div class="info-row"><span class="info-label">Emergency No</span><span class="info-value">{{ contactInfo.emergency_num }}</span></div>
          <div class="info-row"><span class="info-label">Emergency Email</span><span class="info-value">{{ contactInfo.emergency_email }}</span></div>
        </div>
      </div>
    </template>

    <!-- Family (tbl_emp_family_info) - full table -->
    <template v-else-if="activeTab === 'family'">
      <div class="card">
        <div class="card-head">
          <h2 class="card-title">Family</h2>
          <button type="button" class="card-edit" aria-label="Edit">✎</button>
        </div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Relationship</th>
                  <th>Full Name</th>
                  <th>DOB</th>
                  <th>Occupation</th>
                  <th>Employer</th>
                  <th>Tel No</th>
                  <th>Deceased</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in familyRows" :key="i">
                  <td>{{ row.type }}</td>
                  <td>{{ row.name }}</td>
                  <td>{{ row.dob }}</td>
                  <td>{{ row.occupation }}</td>
                  <td>{{ row.employer_name }}</td>
                  <td>{{ row.tel_num }}</td>
                  <td>{{ row.deceased }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Education tab: table with Add Education -->
    <template v-else-if="activeTab === 'education'">
      <div class="card">
        <div class="card-head card-head-actions">
          <h2 class="card-title">Education</h2>
          <button type="button" class="btn-add-education" @click="onAddEducation">+ Add Education</button>
        </div>
        <div class="card-body p-0">
          <div class="education-table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Educational Level</th>
                  <th>School Name</th>
                  <th>Course</th>
                  <th>Highest Grade</th>
                  <th>From Year</th>
                  <th>To Year</th>
                  <th>Year Graduated</th>
                  <th>Scholarship/Academic</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="educationList.length === 0">
                  <td colspan="9" class="no-data">No data available in table</td>
                </tr>
                <tr v-else v-for="(row, i) in educationList" :key="i">
                  <td><button type="button" class="btn-action" @click="editEducation(row)">Edit</button></td>
                  <td>{{ row.level }}</td>
                  <td>{{ row.school }}</td>
                  <td>{{ row.course }}</td>
                  <td>{{ row.highestGrade }}</td>
                  <td>{{ row.fromYear }}</td>
                  <td>{{ row.toYear }}</td>
                  <td>{{ row.yearGraduated }}</td>
                  <td>{{ row.scholarship }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-footer">
            <span>Showing {{ startEntry }} to {{ endEntry }} of {{ educationList.length }} entries</span>
            <div class="footer-btns">
              <button type="button" class="footer-btn" :disabled="educationList.length === 0">Previous</button>
              <button type="button" class="footer-btn" :disabled="educationList.length === 0">Next</button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Work Experience (tbl_emp_work_experience_info) -->
    <template v-else-if="activeTab === 'work'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Work Experience</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Monthly Salary</th>
                  <th>Salary Grade</th>
                  <th>Step</th>
                  <th>Employment Status</th>
                  <th>Government Service</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in workExperienceList" :key="i">
                  <td>{{ row.company_name }}</td>
                  <td>{{ row.position_title }}</td>
                  <td>{{ row.inclusive_date_from }}</td>
                  <td>{{ row.inclusive_date_to }}</td>
                  <td>{{ row.monthly_salary }}</td>
                  <td>{{ row.salary_grade }}</td>
                  <td>{{ row.step }}</td>
                  <td>{{ row.employment_status }}</td>
                  <td>{{ row.government_service }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Eligibility (tbl_emp_civil_service_info) -->
    <template v-else-if="activeTab === 'eligibility'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Eligibility (Civil Service)</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Rating</th>
                  <th>Date of Exam</th>
                  <th>Place of Exam</th>
                  <th>License No</th>
                  <th>Date Release</th>
                  <th>Issuing Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in eligibilityList" :key="i">
                  <td>{{ row.title }}</td>
                  <td>{{ row.rating }}</td>
                  <td>{{ row.date_exam }}</td>
                  <td>{{ row.place_exam }}</td>
                  <td>{{ row.license_no }}</td>
                  <td>{{ row.date_release }}</td>
                  <td>{{ row.issuing_agency }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Service Record (tbl_emp_service_record) -->
    <template v-else-if="activeTab === 'service'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Service Record</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Designation</th>
                  <th>Status</th>
                  <th>Salary</th>
                  <th>Place of Assignment</th>
                  <th>Branch</th>
                  <th>Separation Date</th>
                  <th>Separation Cause</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in serviceRecordList" :key="i">
                  <td>{{ row.service_from }}</td>
                  <td>{{ row.service_to }}</td>
                  <td>{{ row.designation }}</td>
                  <td>{{ row.status }}</td>
                  <td>{{ row.salary }}</td>
                  <td>{{ row.place_of_assign }}</td>
                  <td>{{ row.branch }}</td>
                  <td>{{ row.separation_date }}</td>
                  <td>{{ row.separation_cause }}</td>
                  <td>{{ row.remarks }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Leave History (tbl_leave_history) -->
    <template v-else-if="activeTab === 'leave'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Leave History</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Credits From</th>
                  <th>Credits To</th>
                  <th>No. of Days</th>
                  <th>Particulars</th>
                  <th>Type</th>
                  <th>Balance</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in leaveHistoryList" :key="i">
                  <td>{{ row.credits_from }}</td>
                  <td>{{ row.credits_to }}</td>
                  <td>{{ row.no_of_days }}</td>
                  <td>{{ row.particulars }}</td>
                  <td>{{ row.type }}</td>
                  <td>{{ row.balance }}</td>
                  <td>{{ row.remarks }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Documents (tbl_document) -->
    <template v-else-if="activeTab === 'documents'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Documents</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr><th>Title</th><th>Document</th></tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in documentList" :key="i">
                  <td>{{ row.title }}</td>
                  <td>{{ row.document }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Training (tbl_emp_training) -->
    <template v-else-if="activeTab === 'training'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Training</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Training Code</th>
                  <th>Title</th>
                  <th>Venue</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Hours</th>
                  <th>Level</th>
                  <th>Conducted By</th>
                  <th>Subject Area</th>
                  <th>CPD Points</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in trainingList" :key="i">
                  <td>{{ row.training_code }}</td>
                  <td>{{ row.training_title }}</td>
                  <td>{{ row.training_venue }}</td>
                  <td>{{ row.start_date }}</td>
                  <td>{{ row.end_date }}</td>
                  <td>{{ row.number_hours }}</td>
                  <td>{{ row.level }}</td>
                  <td>{{ row.conducted_by }}</td>
                  <td>{{ row.subject_area }}</td>
                  <td>{{ row.cpd_points }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Awards (tbl_awards) -->
    <template v-else-if="activeTab === 'awards'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Awards</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr><th>Award Title</th><th>Category</th><th>School Year</th><th>Award</th></tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in awardsList" :key="i">
                  <td>{{ row.award_title }}</td>
                  <td>{{ row.category }}</td>
                  <td>{{ row.school_year }}</td>
                  <td>{{ row.award }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Performance (tbl_performance) -->
    <template v-else-if="activeTab === 'performance'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Performance</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr><th>Year</th><th>CBC</th><th>Other Competencies</th><th>KRA</th><th>Adjectival Rating</th><th>File</th></tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in performanceList" :key="i">
                  <td>{{ row.year }}</td>
                  <td>{{ row.cbc }}</td>
                  <td>{{ row.other_competencies }}</td>
                  <td>{{ row.kra }}</td>
                  <td>{{ row.adjectival_rating }}</td>
                  <td>{{ row.performance_file }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Researches (tbl_researches) -->
    <template v-else-if="activeTab === 'researches'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Researches</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body p-0">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr><th>Title of Research</th><th>Year Conducted</th><th>Category</th></tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in researchesList" :key="i">
                  <td>{{ row.title_of_research }}</td>
                  <td>{{ row.year_conducted }}</td>
                  <td>{{ row.category }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>

    <!-- Expertise (tbl_expertise) -->
    <template v-else-if="activeTab === 'expertise'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Expertise</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body">
          <ul class="simple-list">
            <li v-for="(row, i) in expertiseList" :key="i">{{ row.expertise }}</li>
          </ul>
          <p v-if="!expertiseList.length" class="no-data-text">No expertise entries.</p>
        </div>
      </div>
    </template>

    <!-- Affiliation (tbl_affiliation) -->
    <template v-else-if="activeTab === 'affiliation'">
      <div class="card">
        <div class="card-head"><h2 class="card-title">Affiliation</h2><button type="button" class="card-edit" aria-label="Edit">✎</button></div>
        <div class="card-body">
          <ul class="simple-list">
            <li v-for="(row, i) in affiliationList" :key="i">{{ row.affiliation }}</li>
          </ul>
          <p v-if="!affiliationList.length" class="no-data-text">No affiliation entries.</p>
        </div>
      </div>
    </template>

    <!-- Fallback -->
    <div v-else class="card">
      <div class="card-body">
        <p class="placeholder-text">{{ tabLabel(activeTab) }} content will be loaded here.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  officialInfo,
  personalInfo,
  contactInfo,
  familyList,
  educationList as educationListMock,
  workExperienceList,
  eligibilityList,
  serviceRecordList,
  leaveHistoryList,
  documentList,
  trainingList,
  awardsList,
  performanceList,
  researchesList,
  expertiseList,
  affiliationList,
} from '../data/myDetailsMock.js'

const employee = ref({
  employeeName: [officialInfo.lastname, officialInfo.firstname, officialInfo.middlename].filter(Boolean).join(', ').toUpperCase() || 'GAVINO ONG TAN',
  hrId: String(officialInfo.hrid),
  employeeNo: String(officialInfo.employee_id),
  email: officialInfo.email || contactInfo.email,
  contactNo: officialInfo.mobile_number || contactInfo.mobile_num,
  placeOfBirth: personalInfo.pob || 'Ozamiz City',
  birthDate: personalInfo.dob || '30 Oct 1985',
  bloodType: personalInfo.blood_type || 'O',
  maritalStatus: personalInfo.civil_stat || 'Married',
  religion: 'Roman Catholic',
  citizenIdAddress: [contactInfo.house_block_lotnum, contactInfo.street_add, contactInfo.subdivision_village, contactInfo.zip_code].filter(Boolean).join(', ') || '—',
  residentialAddress: [contactInfo.house_block_lotnum1, contactInfo.street_add1, contactInfo.subdivision_village1, contactInfo.zip_code1].filter(Boolean).join(', ') || '—',
  emergencyName: contactInfo.emergency_name || 'Olivia Bennett',
  emergencyRelationship: 'Spouse',
  emergencyPhone: contactInfo.emergency_num || '091324815250',
})

const tabs = [
  { key: 'official', label: 'Official Info' },
  { key: 'personal', label: 'Personal Info' },
  { key: 'contact', label: 'Contact Info' },
  { key: 'family', label: 'Family' },
  { key: 'education', label: 'Education' },
  { key: 'work', label: 'Work Experience' },
  { key: 'eligibility', label: 'Eligibility' },
  { key: 'service', label: 'Service Record' },
  { key: 'leave', label: 'Leave History' },
  { key: 'documents', label: 'Documents' },
  { key: 'training', label: 'Training' },
  { key: 'awards', label: 'Awards' },
  { key: 'performance', label: 'Performance' },
  { key: 'researches', label: 'Researches' },
  { key: 'expertise', label: 'Expertise' },
  { key: 'affiliation', label: 'Affiliation' },
]

const activeTab = ref('official')

const educationList = ref(educationListMock.map(e => ({
  level: e.education_level,
  school: e.school_name,
  course: e.course,
  gpa: '—',
  fromYear: e.from_year,
  toYear: e.to_year,
  yearGraduated: e.year_graduated,
  highestGrade: e.highest_grade,
  scholarship: e.scholarship,
})))

const familyRows = ref(familyList.map(f => ({
  type: f.relationship,
  name: [f.lastname, f.firstname, f.middlename].filter(Boolean).join(', ') + (f.extension ? ` ${f.extension}` : ''),
  dob: f.dob,
  occupation: f.occupation,
  employer_name: f.employer_name,
  tel_num: f.tel_num,
  deceased: f.deceased,
})))

const startEntry = computed(() => educationList.value.length === 0 ? 0 : 1)
const endEntry = computed(() => educationList.value.length)

function tabLabel(key) {
  return tabs.find(t => t.key === key)?.label || key
}

function onAddEducation() {
  alert('Add Education form will open here. Connect to Laravel API later.')
}

function editEducation(row) {
  alert('Edit education: ' + (row.school || row.schoolName))
}
</script>

<style scoped>
.my-details {
  max-width: 100%;
}

.tabs-wrap {
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  border-bottom: 2px solid var(--table-border);
  margin-bottom: 1.25rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}

.tabs-wrap::-webkit-scrollbar {
  height: 6px;
}

.tabs-wrap::-webkit-scrollbar-track {
  background: var(--table-hover);
  border-radius: 3px;
}

.tabs-wrap::-webkit-scrollbar-thumb {
  background: var(--table-border);
  border-radius: 3px;
}

.tab-btn {
  padding: 0.65rem 1rem;
  font-size: 0.8125rem;
  color: var(--text-muted);
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.15s, border-color 0.15s;
}

.tab-btn:hover {
  color: var(--text-primary);
}

.tab-btn.active {
  color: var(--accent);
  font-weight: 600;
  border-bottom-color: var(--accent);
}

/* Cards */
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  margin-bottom: 1.25rem;
  overflow: hidden;
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--table-border);
  background: var(--table-header);
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
}

.card-edit {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 4px;
}

.card-edit:hover {
  color: var(--accent);
  background: var(--table-hover);
}

.card-body {
  padding: 1.25rem;
}

.card-body.p-0 {
  padding: 0;
}

/* Section grid (Official / Contact label-value rows) */
.section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.5rem 2rem;
}

.section-grid .info-row {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0.35rem 0;
  font-size: 0.875rem;
}

.section-grid .info-row.block {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
}

.section-grid .info-label {
  min-width: 160px;
  flex-shrink: 0;
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.8125rem;
}

.section-grid .info-value {
  color: var(--text-primary);
}

.table-wrap {
  overflow-x: auto;
  border-radius: 0 0 8px 8px;
}

.table-wrap .data-table {
  border-radius: 0;
}

.data-table th {
  white-space: nowrap;
  font-size: 0.8125rem;
}

.data-table td {
  font-size: 0.8125rem;
  vertical-align: middle;
}

.data-table tbody tr {
  transition: background 0.12s ease;
}

.data-table tbody tr:nth-child(even) {
  background: rgba(0, 0, 0, 0.02);
}

.data-table tbody tr:hover {
  background: var(--table-hover) !important;
}

.simple-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.simple-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--table-border);
  font-size: 0.875rem;
  color: var(--text-primary);
}

.simple-list li:last-child {
  border-bottom: none;
}

/* Basic information - landscape: one row, compact height */
.basic-info-landscape {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1rem 1.25rem;
}

.basic-photo-cell {
  flex-shrink: 0;
}

.basic-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--table-header);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  border: 1px solid var(--table-border);
}

.basic-contact-cell {
  flex: 0 1 auto;
  min-width: 200px;
}

.basic-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}

.basic-id {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.basic-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  font-size: 0.8125rem;
  color: var(--text-primary);
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.email-link {
  color: var(--link-blue);
  text-decoration: none;
}

.email-link:hover {
  text-decoration: underline;
}

.basic-demographics-cell {
  flex: 1;
  min-width: 280px;
}

.demographics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.5rem 1.5rem;
}

.demographic-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.8125rem;
}

.demographic-item .info-label {
  font-size: 0.75rem;
}

/* Block and divider - arrangement improvements */
.block {
  padding: 0.75rem 1rem;
  border: 1px solid var(--table-border);
  border-radius: 6px;
  background: var(--table-header);
}

.block-divider {
  width: 100%;
  height: 1px;
  background: var(--table-border);
  flex-shrink: 0;
}

.block-divider-vertical {
  width: 1px;
  height: auto;
  min-height: 40px;
  align-self: stretch;
  flex-shrink: 0;
}

.basic-info-landscape .block-divider {
  width: 100%;
  flex-basis: 100%;
  height: 0;
  margin: 0.25rem 0;
  padding: 0;
  border: none;
}

@media (min-width: 720px) {
  .basic-info-landscape .block-divider {
    width: 1px;
    flex-basis: 0;
    height: auto;
    min-height: 60px;
    align-self: stretch;
    margin: 0;
    background: var(--table-border);
  }
}

/* Address - landscape: two columns with divider */
.address-landscape {
  padding: 1rem 1.25rem;
}

.address-row {
  display: flex;
  gap: 0;
  align-items: stretch;
}

.address-row .block {
  flex: 1;
  min-width: 0;
}

@media (max-width: 640px) {
  .address-row {
    flex-direction: column;
  }
  .address-row .block-divider-vertical {
    width: 100%;
    height: 1px;
    min-height: 0;
  }
}

.address-col {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.875rem;
  min-width: 0;
}

.address-col .info-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.address-col .info-value {
  color: var(--text-primary);
  line-height: 1.4;
}

/* Emergency contact - landscape: one row with dividers */
.emergency-landscape {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 0;
  padding: 1rem 1.25rem;
}

.emergency-landscape .block {
  flex: 1;
  min-width: 140px;
}

@media (max-width: 560px) {
  .emergency-landscape .block-divider-vertical {
    width: 100%;
    height: 1px;
    min-height: 0;
  }
}

.emergency-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.875rem;
  min-width: 140px;
}

.emergency-item .info-label {
  font-size: 0.75rem;
}

.info-label {
  color: var(--text-muted);
  font-weight: 500;
}

.info-value {
  color: var(--text-primary);
}

/* Education list */
.education-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.education-item {
  padding: 0.6rem 0.75rem;
  font-size: 0.8125rem;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 0.75rem 1rem;
  align-items: baseline;
}

.education-item.block {
  border-bottom: none;
  margin-bottom: 0;
}

.education-item:last-child {
  border-bottom: none;
}

.education-item strong {
  color: var(--text-primary);
  grid-column: 1;
}

.no-data-text {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin: 0;
  padding: 1.5rem;
  text-align: center;
}

.data-table .no-data {
  font-size: 0.875rem;
  padding: 2rem 1rem !important;
}

/* Family table - block with border */
.family-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  border: 1px solid var(--table-border);
  border-radius: 6px;
  overflow: hidden;
}

.family-table th,
.family-table td {
  text-align: left;
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid var(--table-border);
}

.family-table th {
  font-weight: 600;
  color: var(--text-primary);
  background: var(--table-header);
}

.family-table td {
  color: var(--text-primary);
}

.family-table tbody tr:nth-child(even) {
  background: rgba(0, 0, 0, 0.02);
}

.family-table tbody tr:hover {
  background: var(--table-hover) !important;
}

/* Education table (tab) */
.card-head-actions {
  flex-wrap: wrap;
  gap: 0.5rem;
}

.btn-add-education {
  padding: 0.45rem 0.9rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  background: var(--btn-pink);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-add-education:hover {
  background: var(--btn-pink-hover);
}

.education-table-wrap {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
}

.data-table th,
.data-table td {
  padding: 0.6rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--table-border);
}

.data-table th {
  background: var(--table-header);
  font-weight: 600;
  color: var(--text-primary);
}

.data-table .no-data {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
}

.btn-action {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-action:hover {
  background: var(--accent-hover);
}

.table-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  font-size: 0.8125rem;
  color: var(--text-muted);
  border-top: 1px solid var(--table-border);
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-btns {
  display: flex;
  gap: 0.35rem;
}

.footer-btn {
  padding: 0.35rem 0.65rem;
  border: 1px solid var(--table-border);
  background: #fff;
  border-radius: 4px;
  font-size: 0.8125rem;
  color: var(--text-primary);
  cursor: pointer;
}

.footer-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.placeholder-text {
  color: var(--text-muted);
  font-size: 0.9375rem;
  margin: 0;
  padding: 2rem;
  text-align: center;
}

/* Education table (tab) - ensure consistent with .table-wrap */
.education-table-wrap .data-table th,
.education-table-wrap .data-table td {
  padding: 0.65rem 0.85rem;
}

.table-footer {
  background: var(--table-header);
}
</style>
