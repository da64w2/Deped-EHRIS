/**
 * Mock data aligned with tbl_emp_official_info / tbl_user schema.
 * Replace with Laravel API later.
 */

const departments = [
  'Curriculum Implementation Division',
  'School Governance and Operations',
  'Finance and Administrative Division',
  'Human Resource Development',
  'Planning and Research',
]

const jobTitles = [
  'Education Program Specialist II',
  'Administrative Officer V',
  'Administrative Assistant II',
  'Teacher I',
  'Teacher II',
  'Teacher III',
  'School Principal I',
  'Head Teacher I',
  'Administrative Officer III',
  'HRMO II',
]

const firstNames = [
  'Maria', 'Juan', 'Ana', 'Pedro', 'Carmen', 'Jose', 'Rosa', 'Antonio',
  'Teresa', 'Manuel', 'Elena', 'Francisco', 'Lourdes', 'Ricardo', 'Patricia',
  'Fernando', 'Mercedes', 'Carlos', 'Socorro', 'Miguel',
]

const lastNames = [
  'Santos', 'Reyes', 'Cruz', 'Bautista', 'Garcia', 'Gonzalez', 'Dela Cruz',
  'Rodriguez', 'Mendoza', 'Fernandez', 'Ramos', 'Torres', 'Villanueva',
  'Castillo', 'Rivera', 'Aquino', 'Ocampo', 'Silva', 'Morales', 'Pascual',
]

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function buildMockEmployeeList(total = 500) {
  const list = []
  for (let i = 1; i <= total; i++) {
    const first = randomItem(firstNames)
    const last = randomItem(lastNames)
    const empId = 10000 + i
    list.push({
      id: i,
      hrid: empId,
      employee_id: empId,
      firstname: first,
      middlename: randomItem(['M.', 'S.', 'R.', 'C.', 'P.', '']),
      lastname: last,
      fullname: `${last}, ${first}`,
      email: `${first.toLowerCase()}.${last.toLowerCase().replace(/\s/g, '')}@deped.gov.ph`,
      job_title: randomItem(jobTitles),
      department_id: randomInt(1, 5),
      department_name: randomItem(departments),
      employ_status: randomItem(['Permanent', 'Contractual', 'CoS', 'Substitute']),
      date_of_joining: `${randomInt(2015, 2023)}-${String(randomInt(1, 12)).padStart(2, '0')}-${String(randomInt(1, 28)).padStart(2, '0')}`,
      office: 'Schools Division Office',
    })
  }
  return list
}

// Lazy-loading: return a page of data (simulates API)
let fullList = []
function ensureList() {
  if (!fullList.length) fullList = buildMockEmployeeList(500)
  return fullList
}

export function fetchEmployeePage({ page = 1, pageSize = 10, search = '' }) {
  const list = ensureList()
  let filtered = list

  if (search && search.trim()) {
    const q = search.trim().toLowerCase()
    filtered = list.filter(
      (e) =>
        (e.fullname && e.fullname.toLowerCase().includes(q)) ||
        (e.email && e.email.toLowerCase().includes(q)) ||
        (e.job_title && e.job_title.toLowerCase().includes(q)) ||
        (e.department_name && e.department_name.toLowerCase().includes(q)) ||
        String(e.employee_id).includes(q)
    )
  }

  const total = filtered.length
  const start = (page - 1) * pageSize
  const rows = filtered.slice(start, start + pageSize)

  return new Promise((resolve) => {
    setTimeout(() => resolve({ rows, total }), 300)
  })
}

export function buildMockDepartments() {
  return departments.map((name, i) => ({
    id: i + 1,
    department_id: i + 1,
    department_name: name,
    department_abbrev: name.replace(/\s+/g, '').slice(0, 4).toUpperCase(),
    business_id: 1,
  }))
}
