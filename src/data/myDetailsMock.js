/**
 * Mock data for My Details - aligned with ehris_db_clean.sql tables.
 * Replace with Laravel API later.
 */

// tbl_emp_official_info
export const officialInfo = {
  hrid: 20856,
  employee_id: 14344,
  item_no: 'ITEM-2020-001',
  prefix_name: 'Mr.',
  firstname: 'Gavino',
  middlename: 'Ong',
  lastname: 'Tan',
  extension: 'Jr.',
  work_number: '0912345678',
  mode_of_employement: 'Permanent',
  mobile_number: '0912345678',
  role: 'Teacher',
  email: 'gavino.tan@deped.gov.ph',
  office: 'Schools Division Office',
  department_id: '5',
  division_code: '01',
  station_code: 'OZ',
  reporting_manager: 'Maria Santos',
  job_type: 'Teaching',
  job_title: 'Teacher III',
  salary_grade: 12,
  salary_step: 5,
  employ_status: 'Permanent',
  date_of_joining: '2015-06-01',
  date_of_promotion: '2020-01-15',
  civil_service: 'PBET',
  grade_level: 'Grade 10',
  subject_taught: 'Mathematics',
  year_experience: 9,
  allotted_leave: 15,
  leave_used: 5,
  leave_balance: 10,
  vacation_leave: 15,
  vacation_leave_used: 3,
  vacation_leave_balanced: 12,
  salary_annual: 360000,
}

// tbl_emp_personal_info
export const personalInfo = {
  age: 39,
  gender: 'Male',
  civil_stat: 'Married',
  citizenship: 'Filipino',
  dual_citizenship: 'N/A',
  country: 'Philippines',
  blood_type: 'O',
  height: '5\'7"',
  weight: 70,
  dob: '1985-10-30',
  pob: 'Ozamiz City',
  prc_no: '1234567',
  tin: '123-456-789-000',
  sss: '34-1234567-8',
  gsis_bp: '1234567',
  philhealth: '12-345678901-2',
  pag_ibig: '1234-5678-9012',
  gsis: '1234567',
  agency_emp_num: '14344',
}

// tbl_emp_contact_info
export const contactInfo = {
  email: 'gavino.tan@deped.gov.ph',
  phone_num: '088-1234567',
  mobile_num: '0912345678',
  house_block_lotnum: 'Block 2, Lot 5',
  street_add: 'Jl. Wayang No.2',
  subdivision_village: 'Burangrang Subd.',
  zip_code: '40262',
  house_block_lotnum1: 'Block 2, Lot 5',
  street_add1: 'Jl. Wayang No.2',
  subdivision_village1: 'Burangrang Subd.',
  zip_code1: '40262',
  emergency_name: 'Olivia Bennett',
  emergency_num: '091324815250',
  emergency_email: 'olivia.bennett@email.com',
}

// tbl_emp_family_info - full name from firstname, middlename, lastname, extension
export const familyList = [
  { relationship: 'Father', firstname: 'Benjamin', middlename: 'R.', lastname: 'Williams', extension: '', dob: '1955-03-12', occupation: 'Retired', employer_name: '-', tel_num: '09171234567', deceased: 'No' },
  { relationship: 'Mother', firstname: 'Evelyn', middlename: 'Potts', lastname: 'Williams', extension: '', dob: '1958-07-20', occupation: 'Housewife', employer_name: '-', tel_num: '09171234568', deceased: 'No' },
  { relationship: 'Spouse', firstname: 'Olivia', middlename: 'B.', lastname: 'Bennett', extension: '', dob: '1990-05-15', occupation: 'Teacher', employer_name: 'DepEd', tel_num: '091324815250', deceased: 'No' },
  { relationship: 'Sibling', firstname: 'James', middlename: 'Williams', lastname: 'Williams', extension: '', dob: '1982-01-10', occupation: 'Engineer', employer_name: 'ABC Corp', tel_num: '09181234567', deceased: 'No' },
  { relationship: 'Sibling', firstname: 'Emily', middlename: 'Williams', lastname: 'Williams', extension: '', dob: '1988-11-22', occupation: 'Nurse', employer_name: 'City Hospital', tel_num: '09191234567', deceased: 'No' },
]

// tbl_emp_education_info
export const educationList = [
  { education_level: 'Master Degree', school_name: 'Bina Nusantara', course: 'Business', from_year: '2016', to_year: '2018', year_graduated: '2018', highest_grade: 'N/A', scholarship: 'Academic Scholar' },
  { education_level: 'Bachelor Degree', school_name: 'Bina Nusantara', course: 'Business', from_year: '2012', to_year: '2016', year_graduated: '2016', highest_grade: 'N/A', scholarship: '-' },
]

// tbl_emp_work_experience_info
export const workExperienceList = [
  { company_name: 'DepEd Ozamiz', position_title: 'Teacher III', inclusive_date_from: '2015', inclusive_date_to: 'Present', monthly_salary: '30,000', salary_grade: '12', step: '5', employment_status: 'Permanent', government_service: 'Yes' },
  { company_name: 'ABC School', position_title: 'Teacher I', inclusive_date_from: '2010', inclusive_date_to: '2015', monthly_salary: '18,000', salary_grade: '11', step: '1', employment_status: 'Permanent', government_service: 'No' },
]

// tbl_emp_civil_service_info (Eligibility)
export const eligibilityList = [
  { title: 'Professional Board Exam for Teachers (PBET)', rating: '85.50', date_exam: '2010-04-15', place_exam: 'Manila', license_no: '1234567', date_release: '2010-06-01', issuing_agency: 'PRC' },
  { title: 'Civil Service Professional', rating: '88.00', date_exam: '2009-10-10', place_exam: 'CSC Regional Office', license_no: 'N/A', date_release: '2009-12-01', issuing_agency: 'CSC' },
]

// tbl_emp_service_record
export const serviceRecordList = [
  { service_from: '2010', service_to: '2015', designation: 'Teacher I', status: 'Permanent', salary: '18,000', place_of_assign: 'ABC School', branch: 'Ozamiz', separation_date: '', separation_cause: '', remarks: '-' },
  { service_from: '2015', service_to: 'Present', designation: 'Teacher III', status: 'Permanent', salary: '30,000', place_of_assign: 'SDO Ozamiz', branch: 'Ozamiz', separation_date: '', separation_cause: '', remarks: '-' },
]

// tbl_leave_history
export const leaveHistoryList = [
  { credits_from: '2024-01-01', credits_to: '2024-12-31', no_of_days: '5', particulars: 'Sick Leave', type: 'SL', balance: '10', remarks: 'Approved' },
  { credits_from: '2024-01-01', credits_to: '2024-12-31', no_of_days: '3', particulars: 'Vacation Leave', type: 'VL', balance: '12', remarks: 'Approved' },
]

// tbl_document
export const documentList = [
  { title: 'Diploma - Master Degree', document: 'diploma_master.pdf' },
  { title: 'PRC License', document: 'prc_license.pdf' },
  { title: 'PDS', document: 'pds_2024.pdf' },
]

// tbl_emp_training
export const trainingList = [
  { training_code: 'TRG-2024-001', training_title: 'RPMS Workshop', training_venue: 'SDO Ozamiz', start_date: '2024-01-15', end_date: '2024-01-17', number_hours: 24, level: 'Division', conducted_by: 'HRDD', subject_area: 'Teaching', cpd_points: '3' },
  { training_code: 'TRG-2023-002', training_title: 'ICT Integration', training_venue: 'Online', start_date: '2023-06-01', end_date: '2023-06-05', number_hours: 40, level: 'National', conducted_by: 'DepEd CO', subject_area: 'ICT', cpd_points: '5' },
]

// tbl_awards
export const awardsList = [
  { award_title: 'Outstanding Teacher', category: 'Teaching', school_year: '2023-2024', award: 'Division Level' },
  { award_title: 'Best in Research', category: 'Research', school_year: '2022-2023', award: 'School Level' },
]

// tbl_performance
export const performanceList = [
  { cbc: '4.5', other_competencies: '4.2', kra: '4.0', adjectival_rating: 'Very Satisfactory', year: '2023', performance_file: 'ipcr_2023.pdf' },
  { cbc: '4.3', other_competencies: '4.0', kra: '3.9', adjectival_rating: 'Very Satisfactory', year: '2022', performance_file: 'ipcr_2022.pdf' },
]

// tbl_researches
export const researchesList = [
  { title_of_research: 'Effect of ICT in Mathematics Teaching', year_conducted: '2023', category: 'Action Research' },
  { title_of_research: 'Student Engagement Strategies', year_conducted: '2022', category: 'Basic Research' },
]

// tbl_expertise
export const expertiseList = [
  { expertise: 'Mathematics (Secondary)' },
  { expertise: 'Curriculum Development' },
  { expertise: 'Assessment Design' },
]

// tbl_affiliation
export const affiliationList = [
  { affiliation: 'Mathematics Teachers Association of the Philippines (MTAP)' },
  { affiliation: 'Philippine Association for Teacher Education (PAFTE)' },
]
