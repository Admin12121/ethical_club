"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Frame } from "@/components/ui/frame";

const sections = [
  {
    id: "purpose",
    title: "Purpose and Objectives",
    content: (
      <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          The Cybersecurity Club exists to build practical cybersecurity skills
          among students of Softwarica College. Its purpose is to promote
          ethical hacking awareness, defensive security, hands-on workshops,
          research, competitions, and a responsible learning community.
        </p>
        <p>
          Members are expected to use club activities to grow technically,
          collaborate respectfully, and strengthen the reputation of the club
          and the college.
        </p>
      </div>
    ),
  },
  {
    id: "term",
    title: "Term and Duration",
    content: (
      <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          These terms remain valid for one academic year from the date they are
          adopted, unless they are renewed earlier by mutual written agreement.
        </p>
        <p>
          At the end of each academic year, the club should review the terms,
          assess performance, and update any clause that needs adjustment.
        </p>
      </div>
    ),
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    content: (
      <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          All members, including Board of Directors members and general members,
          must act with discipline, transparency, accountability, and respect
          for the academic and ethical standards of Softwarica College.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            Membership is limited to currently enrolled students in good
            academic standing.
          </li>
          <li>
            Academic responsibilities come first, and club participation must
            not create conflicts with attendance or coursework.
          </li>
          <li>
            Applicants should provide a short statement of purpose explaining
            their interest in cybersecurity and what they hope to contribute.
          </li>
          <li>
            Members must not use knowledge gained through the club to access,
            disrupt, or interfere with any system, network, account, or data
            without authorization.
          </li>
          <li>
            Any discovered vulnerability, breach, or accidental unauthorized
            access must be reported responsibly to the BoDs or Club Advisor.
          </li>
          <li>
            No member may speak for or commit the club to external parties
            without prior authorization.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "governance",
    title: "Decision-Making and Governance",
    content: (
      <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          The BoDs are responsible for administration, planning, and final
          decisions, while still considering member input where appropriate.
        </p>
        <p>
          Major decisions should preferably involve member consultation through
          discussion or voting, as determined by the BoDs. Records of important
          meetings and decisions should be maintained and made available upon
          reasonable request.
        </p>
      </div>
    ),
  },
  {
    id: "discipline",
    title: "Disciplinary Process",
    content: (
      <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          Rule violations should follow a progressive response when possible:
        </p>
        <Frame className="w-full dark">
          <Table variant="card">
            <TableHeader>
              <TableRow>
                <TableHead>Step</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Verbal reminder</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Formal warning</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Probation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Suspension</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>Termination</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Frame>
        <p>
          In cases of serious misconduct, immediate suspension or termination
          may be imposed without following the full sequence. Members subject to
          discipline should have a fair opportunity to appeal in writing.
        </p>
      </div>
    ),
  },
  {
    id: "dispute",
    title: "Dispute Resolution",
    content: (
      <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          Disputes should first be resolved internally through dialogue and, if
          needed, mediation by the BoDs or the designated Club Advisor.
        </p>
        <p>
          All parties should act in good faith, keep communication respectful,
          and avoid escalation unless internal resolution has been attempted.
        </p>
      </div>
    ),
  },
  {
    id: "leave",
    title: "Leave, Resignation, and Handover",
    content: (
      <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          Members who need temporary time away may request leave through the
          official communication channel, subject to approval by the BoDs.
        </p>
        <p>
          A resigning member should submit written notice and hand over any
          ongoing responsibilities, materials, or access before departure.
        </p>
      </div>
    ),
  },
  {
    id: "amendments",
    title: "Amendments",
    content: (
      <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          These terms may be reviewed and amended periodically by the BoDs, with
          changes communicated to members before adoption.
        </p>
        <p>
          Any amendment to the governing memorandum of understanding should be
          made with mutual written consent where required.
        </p>
      </div>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <section className="relative mx-auto gap-3 flex w-full max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
      <h1
        className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl text-center text-white"
        style={{ fontFamily: "var(--font-geist-pixel-circle)" }}
      >
        Terms of Service
      </h1>
      <p className="mx-auto mt-4 text-justify text-sm leading-7 text-white/70 sm:text-base">
        These Rules and Regulations outline the purpose, duration, conduct,
        responsibilities, governance, participation requirements, disciplinary
        process, dispute resolution, resignation procedures, and amendment
        process of the Cybersecurity Club. They are intended to ensure that all
        members, including BoDs and general members, contribute to a respectful,
        ethical, transparent, and academically responsible community within
        Softwarica College.
      </p>

      <div className="space-y-4 max-w-[95rem] w-full lg:w-auto">
        <Accordion className="space-y-3" multiple>
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger className="py-4 text-left text-base text-white hover:no-underline">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4 pr-2">
                {section.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <p className="text-xs uppercase tracking-[0.24em] text-white/45 my-4 text-center">
        Quick Overview
      </p>
      <Frame className="w-full dark text-white">
        <Table className="text-sm" variant="card">
          <TableHeader>
            <TableRow>
              <TableHead>Topic</TableHead>
              <TableHead>Summary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Eligibility</TableCell>
              <TableCell>Softwarica students in good standing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Behavior</TableCell>
              <TableCell>Respectful, ethical, and authorized only</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Oversight</TableCell>
              <TableCell>BoDs with club advisor support</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Appeals</TableCell>
              <TableCell>Written review before final action</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Frame>

      <div className="mt-4 flex flex-col gap-3 px-5 py-4 text-sm text-white/65 text-center">
        <p>
          Questions, corrections, or formal requests should go through the
          club’s official communication channel.
        </p>
      </div>
    </section>
  );
}
