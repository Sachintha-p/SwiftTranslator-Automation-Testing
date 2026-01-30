const { test, expect } = require('@playwright/test');

const testScenarios = [
  //POSITIVE FUNCTIONAL 
  { id: 'Pos_Fun_0001', name: 'Simple meal', input: 'mama adha udhee game gaehuvaa', expected: 'මම අද උදේ game ගැහුවා' },
  { id: 'Pos_Fun_0002', name: 'Interrogative Request', input: 'mata meeka karanna udhav venavadha?', expected: 'මට මේක කරන්න උදව් වෙනවද?' },
  { id: 'Pos_Fun_0003', name: 'Compound', input: 'mama kade yanna hithuvaa eth thaama vaessa', expected: 'මම කඩෙ යන්න හිතුවා එත් තාම වැස්ස' },
  { id: 'Pos_Fun_0004', name: 'Complex', input: 'vaessa unath api adha campus yamudha?', expected: 'වැස්ස උනත් අපි අද campus යමුද?' },
  { id: 'Pos_Fun_0005', name: 'Casual command', input: 'poddak methanata varenko', expected: 'පොඩ්ඩක් මෙතනට වරෙන්කො' },
  { id: 'Pos_Fun_0006', name: 'Greeting', input: 'suba dhavasak oyaata!', expected: 'සුබ දවසක් ඔයාට!' },
  { id: 'Pos_Fun_0007', name: 'Polite Request', input: 'karuNaakaralaa boole dhenna', expected: 'කරුණාකරලා බෝලෙ දෙන්න' }, 
  { id: 'Pos_Fun_0008', name: 'Past Tense', input: 'mama iye raee match eka baeluvaa', expected: 'මම ඉයෙ රෑ match එක බැලුවා' }, 
  { id: 'Pos_Fun_0009', name: 'Future Tense', input: 'api iiLaGa sathiyee trip ekak yamu', expected: 'අපි ඊළඟ සතියේ trip එකක් යමු' },
  { id: 'Pos_Fun_0010', name: 'Negative Form', input: 'mama adha bonne naehae', expected: 'මම අද බොන්නෙ නැහැ' },
  { id: 'Pos_Fun_0011', name: 'Plural form', input: 'poth tika bag ekata dhanna.', expected: 'පොත් ටික bag එකට දන්න.' },
  { id: 'Pos_Fun_0012', name: 'Pronoun variation', input: 'mama hithuva eyaa adha gedhara inne naethi veyi kiyala.', expected: 'මම හිතුව එයා අද ගෙදර ඉන්නේ නැති වෙයි කියල.' },
  { id: 'Pos_Fun_0013', name: 'Word combination', input: 'oya vaeda tika ivara vela enakam mama eliyata vela innam.', expected: 'ඔය වැඩ ටික ඉවර වෙල එනකම් මම එලියට වෙල ඉන්නම්.' },
  { id: 'Pos_Fun_0014', name: 'Emphasis', input: 'me project eka ikmanata ivara karanna oni kiyala eya kivva.', expected: 'මෙ project එක ඉක්මනට ඉවර කරන්න ඔනි කියල එය කිව්ව.' },
  { id: 'Pos_Fun_0015', name: 'Mixed Tech', input: 'magea phone eka charger ekata dhala laptop eka on karanna.', expected: 'මගේ phone එක charger එකට දල laptop එක on කරන්න.' },
  { id: 'Pos_Fun_0016', name: 'English technical', input: 'mama adha udhee project report eka oyaata email kalaa eka balala monava hari venas karanna thiyanava nam kiyanna mokadha heta meka submit karanna oni', expected: 'මම අද උදේ project report එක ඔයාට email කලා එක බලල මොනව හරි වෙනස් කරන්න තියනව නම් කියන්න මොකද හෙට මෙක submit කරන්න ඔනි' }, 
  { id: 'Pos_Fun_0017', name: 'Place Names', input: 'mama Galle yanna laesthiyi.', expected: 'මම Galle යන්න ලැස්තියි.' },
  { id: 'Pos_Fun_0018', name: 'Abbreviations', input: 'adha sellan karanavan mata sms ekak dhaanna.', expected: 'අද සෙල්ලන් කරනවන් මට sms එකක් දාන්න.' },
  { id: 'Pos_Fun_0019', name: 'Currency', input: 'machan Rs. 160 cigarette dhekak aran varen', expected: 'මචන් Rs. 160 cigarette දෙකක් අරන් වරෙන්' },
  { id: 'Pos_Fun_0020', name: 'Time format', input: 'mama edhdhi 10.30 vage veyi.', expected: 'මම එද්දි 10.30 වගෙ වෙයි.' },
  { id: 'Pos_Fun_0021', name: 'Date format', input: 'api 2026-02-11 venidha vedhdhi assignment eka ivara karala dhaamu.', expected: 'අපි 2026-02-11 වෙනිද වෙද්දි assignment එක ඉවර කරල දාමු.' },
  { id: 'Pos_Fun_0022', name: 'Units', input: 'haal 5kg aragena enna.', expected: 'හාල් 5kg අරගෙන එන්න.' },
  { id: 'Pos_Fun_0023', name: 'Line Break', input: 'ape group project eka ivara karanna oni nisa mama me list eka hadhuva.  1. Oyage kalla ivara karala mata code eka evanna. 2. Mama frontend eka design karala meka complete karannam.  3. Heta ude  set vela okkoma merge karala balamu.  4. iita passe apita report eka hadhala submission eka dhanna puluvan veyi. Me vaeda tika tika kaloth apita exam valata paadam karannath kalaya ithiri vaeyi kiyala mama hithanava. naethi nam anthima mohothe api godak amaruve vaetenna puluvan needha', expected: 'ape group project එක ඉවර කරන්න ඔනි නිස මම මෙ list එක හදුව.  1. ඔයගෙ කල්ල ඉවර කරල මට code එක එවන්න. 2. මම ෆ්‍රොන්ටෙන්ඩ් එක design කරල මෙක complete කරන්නම්.  3. හෙට උඩෙ  සෙට් වෙල ඔක්කොම merge කරල බලමු.  4. ඊට පස්සෙ අපිට report එක හදල submission එක දන්න පුලුවන් වෙයි. මෙ වැඩ ටික ටික කලොත් අපිට exam වලට පාඩම් කරන්නත් කලය ඉතිරි වැයි කියල මම හිතනව. නැති නම් අන්තිම මොහොතෙ අපි ගොඩක් අමරුවෙ වැටෙන්න පුලුවන් නේද' },
  { id: 'Pos_Fun_0024', name: 'Long (L1)', input: 'indhiyaave batahira bengala praanthayen vaarthaa vana maaraanthika Nipah vairas vyaapthiya hethuven aasiyaanu kalaapaye rataval raasak siya guvan thotupalavala pareekshana katuyuthu dhedi kireemata piyavara gena thibenava. pasugiya dhisembar maasaye sita batahira bengalaye saukhya sevakayin dhedhenekuta vairasaya aasaadhanaya vii aethi bavata thahavuru vii athi athara, ovun samaga sambandhathaa paevathvu 196 dheneku pamana me vana vita pareekshaavata lak kara athi bavayi vidhes maadhya sadhahan karanne. e anuva, batahira bengaalayee sita guvan yaanaa paeminena guvan thotupala thunaka magiin pariikshaa kiriima aarambha kara thibenavaa.', expected: 'ඉන්දියාවෙ බටහිර බෙන්ගල ප්‍රාන්තයෙන් වාර්තා වන මාරාන්තික ණිපහ් වෛරස් ව්යාප්තිය හෙතුවෙන් ආසියානු කලාපයෙ රටවල් රාසක් සිය ගුවන් තොටුපලවල පරේක්ශන කටුයුතු දෙඩි කිරේමට පියවර ගෙන තිබෙනව. පසුගිය දිසෙම්බර් මාසයෙ සිට බටහිර බෙන්ගලයෙ සෞක්හ්ය සෙවකයින් දෙදෙනෙකුට වෛරසය ආසාදනය වී ඇති බවට තහවුරු වී අති අතර, ඔවුන් සමග සම්බන්දතා පැවත්වු 196 දෙනෙකු පමන මෙ වන විට පරේක්ශාවට ලක් කර අති බවයි විදෙස් මාද්ය සදහන් කරන්නේ. එ අනුව, බටහිර බෙන්ගාලයේ සිට ගුවන් යානා පැමිනෙන ගුවන් තොටුපල තුනක මගීන් පරීක්ශා කිරීම ආරම්බ්හ කර තිබෙනවා.' },
  { id: 'Pos_Fun_0025', name: 'Large (L2)', input: 'Power BI kiyanne data visualization valata thiyana supiri tool ekak. Mama me dhavasvala karana Superstore Sales Analysis project ekata meka godak use karanava. Excel data import karala dashboards hadhana eka maara pahasuyi. DAX formulas paavichchi karala complex logic hadhaganna puluvan nisa visualization thavath accurate venava. Mee project eka complete unama sales insights saha forecasting niyameta pennanna puluvan veyi kiyala mama hithanava.', expected: 'Power BI කියන්නෙ data visualization වලට තියන සුපිරි tool එකක්. මම මෙ දවස්වල කරන Superstore Sales Analysis project එකට මෙක ගොඩක් use කරනව. Excel data import කරල dashboards හදන එක මාර පහසුයි. DAX formulas පාවිච්චි කරල complex logic හදගන්න පුලුවන් නිස visualization තවත් accurate වෙනව. මේ project එක complete උනම sales insights සහ forecasting නියමෙට පෙන්නන්න පුලුවන් වෙයි කියල මම හිතනව.' },

  //NEGATIVE FUNCTIONAL 
  { id: 'Neg_Fun_0001', name: 'No Spaces', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0002', name: 'Phonetic Shortcuts / Slang', input: 'oya khd inne kiyala mta kiyapn', expected: 'ඔයා කොහේද ඉන්නේ කියලා මට කියපන්' }, 
  { id: 'Neg_Fun_0003', name: 'Symbols', input: '@#$%^&*()_+=-[]{};:?/><', expected: '@#$%^&*()_+=-[]{};:?/><' },
  { id: 'Neg_Fun_0004', name: 'Multi Space', input: 'dhumak         dhamuda', expected: 'දුමක්        දමුද' },
  { id: 'Neg_Fun_0005', name: 'Semantic Translation Fail', input: 'mama game ekafinish kra', expected: 'මම game එක finish කළා' }, 
  { id: 'Neg_Fun_0006', name: 'Numeric', input: '1250.75', expected: '1250.75' },
  { id: 'Neg_Fun_0007', name: 'Leetspeak / Invalid Phonetics', input: '5L11T @$$1gnm3nt ek@ ivaradha', expected: 'SLIIT assignment එක ඉවරද' },
  { id: 'Neg_Fun_0008', name: 'Visual Homoglyphs Fail', input: '4iy4 k0h3d4', expected: 'අයියා කොහේද' }, 
  { id: 'Neg_Fun_0009', name: 'Leading Spaces & Code Syntax', input: 'public static void main(String[] args)', expected: 'public static void main(String[] args)' }, 
  { id: 'Neg_Fun_0010', name: 'Short Form Fail', input: 'ID card eka', expected: 'හැඳුනුම්පත් card එක' },

  //UI TEST SCENARIO
  { id: 'Pos_UI_0001', name: 'Real-time Output Update', input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' }
];

test.describe('SwiftTranslator - Final Verified Set', () => {
  test.setTimeout(150000); 

  for (const scenario of testScenarios) {
    test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {

      await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
      
      const inputArea = page.getByPlaceholder(/Input Your Singlish Text Here/i);
      
      await inputArea.pressSequentially(scenario.input, { delay: 50 });

      const outputArea = page.locator('div.panel-title:has-text("Sinhala") + div');
      
      await expect(outputArea).not.toBeEmpty({ timeout: 20000 });
      
      const actualText = await outputArea.innerText();
      const trimmedActual = actualText.trim();
      
      console.log(`${scenario.id} Received: ${trimmedActual}`);
      expect(trimmedActual).toBe(scenario.expected);
    });
  }
});