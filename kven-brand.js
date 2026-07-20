(() => {
  const asset = 'assets/kven-os-logo-transparent.png';
  if (localStorage.getItem('kven-demo-mode') === 'true' && !localStorage.getItem('kven-demo-expanded')) {
    const now = new Date().toLocaleString();
    const report = {
      title: 'Q2 Enterprise Performance, Resilience and Decision Review',
      source: 'Asterion Mobility demo evidence pack', audience: 'Leadership', time: now,
      content: 'Q2 executive scorecard: revenue reached $842 million, up 14.8% year-over-year; EBITDA was $96 million, up 8.2%; gross margin declined from 21.6% to 19.8%. Production output reached 184,200 units, up 12.4%, while on-time delivery declined to 91.2%. Atlas line supplier delivery fell to 87%, leaving a 16-day battery-cell inventory buffer. First-pass yield is 96.4%, warranty claims are 2.1% of shipped units, and safety performance is 0.38 recordable incidents per 200,000 hours. Employee attrition is 9.6%, critical-role vacancies are 14, and supplier concentration remains high: the top three suppliers represent 62% of direct-material spend. Cash conversion cycle improved from 54 to 49 days. Working-capital release opportunity is estimated at $24 million. Reported carbon intensity fell 6.1% year-over-year, but regulatory due diligence remains open for two high-risk suppliers. Management decision requests: approve Atlas dual-sourcing, release a 90-day supplier recovery plan, and authorize a cross-functional margin protection programme.'
    };
    localStorage.setItem('cortex-logged', JSON.stringify(report));
    localStorage.setItem('cortex-agent-tasks', JSON.stringify([
      {title:'Prepare Atlas dual-sourcing approval package',status:'Prepared - awaiting executive review'},
      {title:'Create 90-day supplier recovery plan',status:'Prepared - owner assignment required'},
      {title:'Validate $24 million working-capital release assumptions',status:'Prepared - Finance review required'},
      {title:'Open regulatory due-diligence review for two suppliers',status:'Prepared - Compliance review required'}
    ]));
    localStorage.setItem('cortex-posts', JSON.stringify([
      {title:'Atlas supply recovery stand-up',body:'Operations and Procurement will review battery-cell recovery milestones every Monday. Escalate any line-stop risk within four hours.',audience:'All managers',time:now},
      {title:'Q2 margin protection decision requested',body:'Finance has prepared the working-capital and margin-impact pack. No spend, supplier, or pricing change is authorised until executive approval.',audience:'Leadership',time:now},
      {title:'Quality containment remains active',body:'Plant teams must maintain enhanced end-of-line inspection on the Atlas line while root-cause evidence is reviewed.',audience:'Operations',time:now},
      {title:'Supplier diligence checkpoint',body:'Risk and Compliance will publish the due-diligence evidence status for high-risk suppliers before the next governance meeting.',audience:'Leadership',time:now}
    ]));
    localStorage.setItem('kven-demo-dataset', JSON.stringify({
      financial:{revenue:'$842m',ebitda:'$96m',margin:'19.8%',cashConversion:'49 days',workingCapital:'$24m opportunity'},
      operations:{output:'184,200 units',onTimeDelivery:'91.2%',firstPassYield:'96.4%',warrantyClaims:'2.1%'},
      supplyChain:{supplierDelivery:'87%',inventoryBuffer:'16 days',topThreeSpend:'62%',risk:'Atlas battery-cell concentration'},
      people:{attrition:'9.6%',criticalVacancies:14,safetyRate:'0.38 TRIR'},
      sustainability:{carbonIntensity:'-6.1% YoY',dueDiligence:'2 suppliers open'},
      decisions:['Approve dual-sourcing','Fund 90-day recovery plan','Release working capital','Maintain quality containment'],
      scenarios:['Supplier disruption','Margin recovery','Demand upside','Regulatory intervention'],
      governance:{approvalsRequired:3,auditEvents:12,materialRisks:4}
    }));
    localStorage.setItem('kven-demo-expanded', 'true');
  }
  const style = document.createElement('style');
  style.textContent = `.brand{gap:0!important}.mark{width:58px!important;height:58px!important;border-radius:0!important;background:transparent url('${asset}') center top/100px 100px no-repeat!important;mix-blend-mode:normal!important;color:transparent!important;box-shadow:none!important;overflow:hidden!important}.mark:after{content:none!important}.light .mark{background-color:transparent!important;mix-blend-mode:normal!important;filter:none!important}`;
  document.head.append(style);
  document.querySelectorAll('.brand').forEach(brand => {
    const mark = brand.querySelector('.mark');
    if (!mark) return;
    [...brand.childNodes].forEach(node => { if (node !== mark) node.remove(); });
    mark.textContent = ''; mark.setAttribute('aria-label', 'Kven OS');
  });
  if (localStorage.getItem('kven-demo-mode') === 'true' && typeof renderModules === 'function') renderModules();
})();
