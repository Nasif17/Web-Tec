const userType = document.getElementById('userType');
const rollDiv = document.getElementById('rollDiv');
const deptDiv = document.getElementById('deptDiv');

userType.addEventListener('change', () => {
    const value = userType.value;
    if (value === 'student') {
        rollDiv.style.display = 'block';
        deptDiv.style.display = 'none';
    } else if (value === 'teacher') {
        rollDiv.style.display = 'none';
        deptDiv.style.display = 'block';
    } else {
        rollDiv.style.display = 'none';
        deptDiv.style.display = 'none';
    }
});