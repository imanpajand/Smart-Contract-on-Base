▎۱. نصب ابزارها
ابتدا نیاز دارید که ابزارهای لازم را نصب کنید:

- Node.js: برای اجرای جاوا اسکریپت.
- Truffle یا Hardhat: برای توسعه و تست قراردادهای هوشمند.
- Ganache: برای شبیه‌سازی شبکه بلاکچین.

▎۲. ایجاد پروژه جدید
با استفاده از Truffle یا Hardhat یک پروژه جدید ایجاد کنید:

npx hardhat init

▎۳. نوشتن قرارداد هوشمند
یک فایل جدید با پسوند .sol در پوشه contracts ایجاد کنید.مثل MyContract.sol:
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }

    function setName(string memory _name) public {
        name = _name;
    }
}
