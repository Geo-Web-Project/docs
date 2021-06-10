# Architecture Overview

The Geo Web is an open information network. It's conceptually \(and philosophically\) similar to the World Wide Web in many ways. Just as several underlying protocols and components create the experience of "surfing the web," the Geo Web is defined with a multi-layer technology stack.

![High-level diagram of the Geo Web&apos;s core components and interfaces](../.gitbook/assets/geo-web-architecture-overview.png)

While not 100% analogous, we can compare the Geo Web stack to the more familiar web stack as a starting point for deeper technical exploration. Check out the table below to start building your mental model of the Geo Web:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Function</th>
      <th style="text-align:left">Traditional Web</th>
      <th style="text-align:left">Geo Web</th>
      <th style="text-align:left">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Namespace</td>
      <td style="text-align:left">Domain Name System (<a href="https://en.wikipedia.org/wiki/Domain_Name_System">DNS</a>)</td>
      <td
      style="text-align:left"><a href="smart-contracts/">Geo Web Smart Contracts</a>
        </td>
        <td style="text-align:left"><a href="smart-contracts/geo-web-coordinates.md">Geo Web coordinates</a> are
          like IP addresses. Parcels are like domain names.</td>
    </tr>
    <tr>
      <td style="text-align:left">Lookup</td>
      <td style="text-align:left">DNS Servers</td>
      <td style="text-align:left"><a href="subgraph/">Geo Web Subgraph</a>
      </td>
      <td style="text-align:left">The Graph network allows the Geo Web subgraph to scale and perform like
        DNS without centralization or an extensive infrastructure buildout.</td>
    </tr>
    <tr>
      <td style="text-align:left">Namespace Registration</td>
      <td style="text-align:left">
        <p>Domain registrars</p>
        <p>(eg GoDaddy)</p>
      </td>
      <td style="text-align:left"><a href="../concepts/cadastre-intro.md">Cadastre</a>
      </td>
      <td style="text-align:left">The Cadastre also includes functions similar to a CMS on the traditional
        web. It won&apos;t be the exclusive way to register or trade Geo Web land.</td>
    </tr>
    <tr>
      <td style="text-align:left">Content Transfer</td>
      <td style="text-align:left">
        <p>Hypertext Transfer</p>
        <p>Protocol (<a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol">HTTP</a>)</p>
      </td>
      <td style="text-align:left"><a href="https://ipfs.io/">IPFS</a>
      </td>
      <td style="text-align:left">IPFS is a peer-to-peer transfer protocol, so concepts around file storage
        differ from HTTP&apos;s client-server assumptions.</td>
    </tr>
    <tr>
      <td style="text-align:left">Content Formatting</td>
      <td style="text-align:left">
        <p>Hypertext Markup</p>
        <p>Language (<a href="https://en.wikipedia.org/wiki/HTML">HTML</a>)</p>
      </td>
      <td style="text-align:left"><a href="https://www.ceramic.network/">Ceramic Network</a>
      </td>
      <td style="text-align:left">Ceramic can additionally be used to define identities on the Geo Web via
        <a
        href="https://idx.xyz/">IDX</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Archive</td>
      <td style="text-align:left"><a href="https://archive.org/web/">Wayback Machine</a>
      </td>
      <td style="text-align:left"><a href="https://filecoin.io/">Filecoin</a>
      </td>
      <td style="text-align:left">Filecoin is used as the archival complement to IPFS &amp; Ceramic&apos;s
        &quot;hot storage&quot; for Geo Web content.</td>
    </tr>
    <tr>
      <td style="text-align:left">Browsing Interface</td>
      <td style="text-align:left">
        <p>Web Browsers</p>
        <p>(eg Chrome)</p>
      </td>
      <td style="text-align:left"><a href="../concepts/spatial-browsing.md">Spatial Browser</a>
      </td>
      <td style="text-align:left">Competition across browsers will be encouraged on the Geo Web as on the
        WWW.</td>
    </tr>
  </tbody>
</table>

In the remainder of this section, we'll explore these components first from a functional perspective then at a detailed technical level. This section is targeted for developers and technical users, but non-developers can benefit from this information as well.

