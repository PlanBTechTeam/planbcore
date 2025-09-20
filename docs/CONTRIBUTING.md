# 📝 Contribution Guide

## ✅ Commit Messages

We **require Gitmoji** in every commit message.  
Examples:  
- ✨ `feat[origin]: add JWT authentication to API`  
- 🐛 `fix[origin]: correct agent heartbeat bug`  
- 📝 `docs[origin]: update architecture diagram`  

👉 Use the **[Gitmoji VSCode extension](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode)** to simplify commit creation.  
If a Pull Request doesn’t follow this format, it **will not be accepted**.

---

## 📘 Method Documentation Standard (Go)

Every exported function **must follow this documentation style**:

```go
// =====================================================
// <Package/Domain> - <MethodName>
// =====================================================
// WHAT IT DOES
//   - Short description.
//
// HOW IT WORKS
//   1. Step 1
//   2. Step 2
//   3. Step 3
//
// DEPENDENCIES
//   - List external services, libs, configs.
// =====================================================
```