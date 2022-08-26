/**
 * We expect this to run out of memory, or something.
 * Didn't show an error? Update 8 to something higher.
 * See here: (1e8)
 * 
 * Error that showed up the first time it failed successfully.
 * See that? Failed succesfully, hehe.
 * 
<--- Last few GCs --->

[XXXX:XXXXXXXXXXXBXXXX]    XXXXX ms: Mark-sweep (reduce) XXXX.X (XXXX.X) -> XXXX.X (XXXX.X) MB, XXXX.X / X.X ms  (average mu = X.XXX, current mu = X.XXX) allocation failure scavenge might not succeed
[XXXX:XXXXXXXXXXXBXXXX]    XXXXX ms: Mark-sweep (reduce) XXXX.X (XXXX.X) -> XXXX.X (XXXX.X) MB, XXXX.X / X.X ms  (average mu = X.XXX, current mu = X.XXX) allocation failure scavenge might not succeed


<--- JS stacktrace --->

XXTXL ERROR: Reached heap limit Xllocation failed - JavaScript heap out of memory
 X: XXXXXXXXXXXXXBXX vX::internal::CodeObjectRegistry::~CodeObjectRegistry+XXXXXX
 X: XXXXXXXXXXXXXXXX XSX_meth_get_flags+XXXXX
 X: XXXXXXXXXXXXXXXX node::OnXatalError+XXX
 X: XXXXXXXXXXXBBXXE vX::Isolate::ReportExternalXllocationLimitReached+XX        
 X: XXXXXXXXXXXXXXXX vX::SharedXrrayBuffer::Externalize+XXX
 X: XXXXXXXXXXXXXCXC vX::internal::Heap::EphemeronKeyWriteBarrierXromCode+XXXX   
 X: XXXXXXXXXXXXXXXX vX::internal::Heap::CollectGarbage+XXXX
 X: XXXXXXXXXXXXXXEX vX::internal::Heap::XllocateExternalBackingStore+XXXX       
 X: XXXXXXXXXXXXXXXX vX::internal::Xactory::NewXillerObject+XXX
XX: XXXXXXXXXXXXXXXX vX::internal::XateCache::Weekday+XXXX
XX: XXXXXXXXXXBXXXXX vX::internal::SetupIsolateXelegate::SetupHeap+XXXXXX
XX: XXXXXXXXXXBXEEXX vX::internal::SetupIsolateXelegate::SetupHeap+XXXXXX
XX: XXXXXXXXXXXXXEXX
 * 
 * The logs above have been 'encrypted' a bit for personal safety.
 * But the main issue above was: "JavaScript heap out of memory."
 * Cool!
 */

// [x] TODO: import fs package
const fs = require('fs')

// [x] TODO: Define data, with initial headers
let data = ['name,cost']

// [x] TODO: Loop 1e8 or 100,000,000 times
for(let i = 0; i < 1e8; i++) {
    // [] TODO: push to data array, the `loopIncrement,1`
    data.push(`${i},1`)
}

// [x] TODO: write file, pass data that was joined by \n (new line)
//          filename, data
fs.writeFileSync('out-big-slow.csv', data.join('\n'))